# Genesis AI - Database Design

Version: 1.0

---

# Purpose

This document defines the database architecture of Genesis AI.

The database is responsible for storing users, projects, AI conversations, generated code, settings, memory, and system logs.

---

# Database Type

Primary Database

PostgreSQL

Secondary Database

Redis

Vector Database

Qdrant (Future)

---

# Core Tables

## Users

- User ID
- Name
- Email
- Password
- Plan
- Created At

---

## Projects

- Project ID
- Owner ID
- Project Name
- Description
- Created At

---

## Files

- File ID
- Project ID
- File Name
- Path
- Content
- Version

---

## Conversations

- Chat ID
- User ID
- Prompt
- Response
- Model
- Timestamp

---

## AI Memory

- Memory ID
- User ID
- Context
- Importance
- Last Used

---

## Agents

- Agent ID
- Agent Name
- Role
- Status

---

## Templates

- Template ID
- Name
- Category
- Description

---

## Plugins

- Plugin ID
- Name
- Version
- Author

---

## Logs

- Log ID
- Type
- Message
- Timestamp

---

# Relationships

User
│
├── Projects
│      ├── Files
│      ├── Conversations
│      ├── Logs
│      └── AI Memory

---

# Security

- Encrypted Passwords
- Row Level Security
- Role Based Access
- Backup Support

---

# Status

Approved
