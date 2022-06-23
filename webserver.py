import os
import sys
# import msvcrt

class RunServer():

	def __init__(self, host = "192.168.100.50"):
		self.createServer(host)

	def createServer(self, host):
		os.system(f"python -m http.server --bind {host}")
		self.repeat_forerver()

	def getInput(self) -> list:
		char = msvcrt.getch().decode("utf-8") #GET CHAR
		return [char, ord(char)]

	def repeat_forerver(self) -> None:
		while True:
			userKey = self.getInput()
			if userKey[1] == 27:
				print(f"Exit... key={userKey[1]}")
				exit(0)

			elif userKey[0] == 'r':
				print("Reloading server...")
				RunServer

			else:
				os.system("cls")
				print(userKey)

if len(sys.argv) > 1:
	print("Web server running at", sys.argv[1], "port 8000 (default).")
	RunServer(sys.argv[1])

else:
	print("Web server running at 192.168.100.50 port 8000 (all default).")
	RunServer()