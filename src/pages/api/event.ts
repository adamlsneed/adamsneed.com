export const prerender = false;

import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request, locals }) => {
  try {
    const { event_type, event_data, page, session_id } = await request.json() as {
      event_type: string;
      event_data?: string;
      page?: string;
      session_id?: string;
    };

    if (!event_type) {
      return new Response(JSON.stringify({ error: 'event_type required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const runtime = (locals as any)?.runtime;
    const db = runtime?.env?.DB;

    if (!db) {
      // No D1 binding (local dev) — just acknowledge
      return new Response(JSON.stringify({ ok: true }), {
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const ip = request.headers.get('cf-connecting-ip') || request.headers.get('x-forwarded-for') || 'unknown';
    const ua = request.headers.get('user-agent') || '';

    // Hash the IP for privacy
    const encoder = new TextEncoder();
    const data = encoder.encode(ip + 'adamsneed-salt');
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    const ipHash = Array.from(new Uint8Array(hashBuffer)).slice(0, 8).map(b => b.toString(16).padStart(2, '0')).join('');

    await db.prepare(
      'INSERT INTO events (session_id, ip_hash, event_type, event_data, page, user_agent) VALUES (?, ?, ?, ?, ?, ?)'
    ).bind(session_id || null, ipHash, event_type, event_data || null, page || null, ua).run();

    return new Response(JSON.stringify({ ok: true }), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err: any) {
    console.error('Event API error:', err);
    return new Response(JSON.stringify({ ok: true }), {
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
