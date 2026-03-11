-- Chat messages: every question and response
CREATE TABLE IF NOT EXISTS chat_messages (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  created_at TEXT DEFAULT (datetime('now')),
  session_id TEXT,
  ip_hash TEXT,
  question TEXT NOT NULL,
  response TEXT,
  user_agent TEXT
);

-- Events: slash commands, PDF downloads, page views, etc.
CREATE TABLE IF NOT EXISTS events (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  created_at TEXT DEFAULT (datetime('now')),
  session_id TEXT,
  ip_hash TEXT,
  event_type TEXT NOT NULL,
  event_data TEXT,
  page TEXT,
  user_agent TEXT
);

-- Index for querying by date and type
CREATE INDEX IF NOT EXISTS idx_chat_created ON chat_messages(created_at);
CREATE INDEX IF NOT EXISTS idx_events_type ON events(event_type, created_at);
