from http.server import HTTPServer, SimpleHTTPRequestHandler
import ssl

# Server setup
server_address = ('127.0.0.1', 8443)
httpd = HTTPServer(server_address, SimpleHTTPRequestHandler)

# Modern TLS context
context = ssl.SSLContext(ssl.PROTOCOL_TLS_SERVER)
context.load_cert_chain(certfile='server.crt', keyfile='server.key')

# Wrap the socket
httpd.socket = context.wrap_socket(httpd.socket, server_side=True)

print("Serving on https://127.0.0.1:8443")
httpd.serve_forever()
