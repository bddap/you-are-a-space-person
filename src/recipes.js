module.exports = {
  repeat : (n, f) => { for (var i = 0; i < n; i++) f() },
  end : ls => ls.slice(-1)[0]
}
