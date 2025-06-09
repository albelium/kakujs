#!/usr/bin/env bash
set -euo pipefail

echo "🚀 Starting project bootstrap..."

# Check if mise is installed
if ! command -v mise &> /dev/null; then
  echo "📦 Installing mise..."
  curl https://mise.jdx.dev/install.sh | sh
fi

# Install tools via mise
echo "🔧 Installing tools..."
mise install

# Install dependencies
echo "📚 Installing dependencies..."
pnpm install

# Install git hooks
echo "🪝 Installing git hooks..."
pnpm lefthook install

echo "✅ Bootstrap complete!"
