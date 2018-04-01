const middleware = {
  baseUrl: "http://localhost:3000/"
}

const github = {
  baseUrl: "https://api.github.com/",
  clientId: '42f2b5c1e5b523bb55aa',
  authUrl: 'http://127.0.0.1:3000/auth/github',
  scopes: ['public_repo', 'read:user', 'write:discussion'],
  popupOptions: { width: 1020, height: 618 }
}

export {
  middleware,
  github
}
