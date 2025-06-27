class Test {
  static count = 1

  run() {
    console.log('run')
  }

  static run2() {
    console.log('run 2')
  }
}

class Test2 extends  Test{
}
Test2.count += 1

console.log(Test.count)
