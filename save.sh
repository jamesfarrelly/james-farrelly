#!/bin/bash
# Adds all files, asks for a commit message, and pushes to GitHub
git add .
echo "-----------------------------------"
read -p "Enter a short commit message (e.g., 'Fixed typo on homepage'): " commit_message
git commit -m "$commit_message"
echo "-----------------------------------"
# This next command gets your current branch name automatically
git push -u origin $(git rev-parse --abbrev-ref HEAD)
echo "-----------------------------------"
echo "✅ Done. Your changes are pushed. Now go to GitHub to open a Pull Request!"
