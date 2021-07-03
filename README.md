# Authantication APIs

**'for now you can change `localhost`'**

**'Regiter user 👇🏾'**

`POST http://llocalhost:3000/api/admincreate`

header
`Content-Type: application/json`

body

`{ "fname": "xman", "lname": "coder", "phone": "12345", "email": "xcoder@gmail.com", "password": "12345" }`

**'Login 👇🏾'**

`POST http://localhost:3000/api/login`

headers

`Content-Type: application/json`

body

`{ "username": xxx, "password": xxx }`

**'Create new 👇🏾'**

`POST http://localhost:3000/api/news`

Headers

`Content-Type: application/json`

`x-auth-token: token xxxx`

`{ "title": "League mach", "category": "news", "image_detail": "ldjsh image_detailfidhn image_detail", "decription": "jksdnc kdfnjvdjk vkdnfv knfdlv fdm, ldfknv df ", "types": "types", "images": "url" }`
