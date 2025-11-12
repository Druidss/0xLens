# 0xLens

A simple and efficient Ethereum address analysis tool.

## Features

- ✅ Validate Ethereum addresses
- 🔍 Analyze address format and properties
- ✨ Convert addresses to EIP-55 checksum format
- 🚀 Fast and lightweight CLI interface

## Installation

```bash
# Clone the repository
git clone https://github.com/Druidss/0xLens.git
cd 0xLens

# Install dependencies
pip install -r requirements.txt
```

## Usage

### Basic Analysis

Analyze any Ethereum address:

```bash
python oxlens.py 0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb0
```

Output:
```
✅ Valid Ethereum Address
Address: 0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb0
Checksum: 0x742D35CC6634c0532925A3b844BC9E7595F0BEb0
Is Checksummed: No
Length: 42 characters
Starts with 0x: Yes
```

### Get Checksummed Address

Convert an address to its checksummed format:

```bash
python oxlens.py --checksum 0x742d35cc6634c0532925a3b844bc9e7595f0beb0
```

Output:
```
0x742D35CC6634c0532925A3b844BC9E7595F0BEb0
```

### Quiet Mode

Validate an address silently (useful for scripts):

```bash
python oxlens.py --quiet 0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb0
echo $?  # Returns 0 for valid, 1 for invalid
```

## Options

- `address` - The Ethereum address to analyze (required)
- `-c, --checksum` - Only output the checksummed address
- `-q, --quiet` - Only return exit code (0 for valid, 1 for invalid)
- `-h, --help` - Show help message

## Examples

```bash
# Analyze a valid address
python oxlens.py 0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb0

# Check if an address is valid (script usage)
if python oxlens.py --quiet 0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb0; then
    echo "Valid address"
else
    echo "Invalid address"
fi

# Get checksummed version
python oxlens.py -c 0x742d35cc6634c0532925a3b844bc9e7595f0beb0
```

## What is EIP-55 Checksum?

EIP-55 introduces a checksum for Ethereum addresses by capitalizing certain hex characters. This helps prevent errors when copying addresses and provides a basic validation mechanism.

## License

MIT License

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.