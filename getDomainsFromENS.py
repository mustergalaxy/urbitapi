from web3 import Web3
from ens import ENS

# Replace with your Infura API key
infura_api_key = "a818db69aee34e099594cb2e137efeb0"

# Create a Web3 provider
web3 = Web3(Web3.HTTPProvider(f"https://mainnet.infura.io/v3/{infura_api_key}"))

# Create an ENS instance
ens = ENS(web3)

# Address to look up
address = "0xb8c2C29ee19D8307cb7255e1Cd9CbDE883A267d5"

try:
  # Resolve ENS name to address
  resolved_address = ens.getAddress(name="somkiran.eth")

  # Reverse lookup names associated with the address
  names = ens.reverseLookup(address=resolved_address)

  print(f"Owned domains: {names}")
except Exception as e:
  print(f"Error fetching owned domains: {e}")
