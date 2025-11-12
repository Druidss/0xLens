#!/usr/bin/env python3
"""
0xLens - Ethereum Address Analysis Tool

A simple CLI tool to analyze and validate Ethereum addresses.
"""

import sys
import argparse
from eth_utils import is_address, is_checksum_address, to_checksum_address


class AddressAnalyzer:
    """Ethereum address analyzer"""
    
    def __init__(self, address):
        self.address = address
        
    def is_valid(self):
        """Check if the address is valid"""
        return is_address(self.address)
    
    def get_checksum_address(self):
        """Get the checksummed version of the address"""
        if self.is_valid():
            return to_checksum_address(self.address)
        return None
    
    def is_checksummed(self):
        """Check if the address is already checksummed"""
        if self.is_valid():
            return is_checksum_address(self.address)
        return False
    
    def analyze(self):
        """Perform comprehensive analysis of the address"""
        if not self.is_valid():
            return {
                "valid": False,
                "error": "Invalid Ethereum address format"
            }
        
        return {
            "valid": True,
            "address": self.address,
            "checksum_address": self.get_checksum_address(),
            "is_checksummed": self.is_checksummed(),
            "length": len(self.address),
            "starts_with_0x": self.address.startswith("0x")
        }


def format_analysis(analysis):
    """Format analysis results for display"""
    if not analysis["valid"]:
        return f"❌ {analysis['error']}"
    
    lines = [
        "✅ Valid Ethereum Address",
        f"Address: {analysis['address']}",
        f"Checksum: {analysis['checksum_address']}",
        f"Is Checksummed: {'Yes' if analysis['is_checksummed'] else 'No'}",
        f"Length: {analysis['length']} characters",
        f"Starts with 0x: {'Yes' if analysis['starts_with_0x'] else 'No'}"
    ]
    return "\n".join(lines)


def main():
    """Main CLI entry point"""
    parser = argparse.ArgumentParser(
        description="0xLens - Ethereum Address Analysis Tool",
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog="""
Examples:
  %(prog)s 0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb0
  %(prog)s --checksum 0x742d35cc6634c0532925a3b844bc9e7595f0beb0
        """
    )
    
    parser.add_argument(
        "address",
        help="Ethereum address to analyze"
    )
    
    parser.add_argument(
        "-c", "--checksum",
        action="store_true",
        help="Only output the checksummed address"
    )
    
    parser.add_argument(
        "-q", "--quiet",
        action="store_true",
        help="Only return exit code (0 for valid, 1 for invalid)"
    )
    
    args = parser.parse_args()
    
    analyzer = AddressAnalyzer(args.address)
    
    if args.quiet:
        sys.exit(0 if analyzer.is_valid() else 1)
    
    if args.checksum:
        checksum = analyzer.get_checksum_address()
        if checksum:
            print(checksum)
            sys.exit(0)
        else:
            print("Invalid address", file=sys.stderr)
            sys.exit(1)
    
    analysis = analyzer.analyze()
    print(format_analysis(analysis))
    sys.exit(0 if analysis["valid"] else 1)


if __name__ == "__main__":
    main()
