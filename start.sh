#!/bin/bash
# Switches to main, pulls latest code, and asks for a new branch name
git checkout main
git pull
echo "-----------------------------------"
read -p "Enter a name for your new branch (e.g., update-contact-page): " branch_name
git checkout -b $branch_name
echo "-----------------------------------"
echo "✅ Done. You are now on your new branch: $branch_name"
