import 'bulma/css/bulma.css'

class Foo {
  test (text) {
    alert(text)
  }
}

const Baz = new Foo()
Baz.test('hola!')
