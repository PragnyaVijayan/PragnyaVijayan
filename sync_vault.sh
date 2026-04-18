#!/bin/bash

# ==========================================
# OBSIDIAN TO QUARTZ SYNC SCRIPT
# ==========================================

# 1. Update this to the absolute path of your Obsidian Vault where your notes live.
# Example: VAULT_PATH="/Users/pragnyavijayan/Documents/Obsidian"
VAULT_PATH="/Users/pragnyavijayan/Documents/Obsidian Vault/public_thoughts"

# The destination is our Quartz content folder
DEST_PATH="./content"

if [ "$VAULT_PATH" = "/path/to/your/obsidian/vault" ]; then
  echo "Error: Please update the VAULT_PATH in sync_vault.sh first!"
  exit 1
fi

if [ ! -d "$VAULT_PATH" ]; then
  echo "Error: Vault path does not exist: $VAULT_PATH"
  exit 1
fi

echo "Syncing notes from $VAULT_PATH to $DEST_PATH..."

# Use rsync to copy files. 
# --archive (-a) preserves permissions and copies recursively.
# --delete ensures that files deleted in your vault are also removed from Quartz.
# --exclude ignores Obsidian's internal settings folder to keep your site clean.
rsync -a --delete --exclude '.obsidian' "$VAULT_PATH/" "$DEST_PATH/"

echo "Sync complete!"
echo "Your latest notes are now in the Quartz content folder."
