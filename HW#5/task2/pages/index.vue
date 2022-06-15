<template><div/></template>

<script>
import { Component, Vue } from 'nuxt-property-decorator';

export default @Component({
  name: 'IndexPage'
})

class IndexPage extends Vue {
  data () {
    return {
      range: 5,
      prizes: [10, 5, 2],
      totalPrize: 0
    };
  }

  gameEnds () {
    alert(`Thank you for a game. Your prize is: ${this.totalPrize}`);
    while (true) {
      if (confirm('Do you want to play again?')) {
        this.range = 5;
        this.prizes = [10, 5, 2];
        this.totalPrize = 0;
        break;
      }
      else {
        alert('You did not become a millionaire');
      }
    }
  }

  rightNumber (attempt) {
    this.totalPrize += this.prizes[attempt - 1];
    if (confirm('Do you want to continue?')) {
      this.range *= 2;
      for (let i = 0; i < this.prizes.length; i++) {
        this.prizes[i] *= 3;
      }
    } else {
      this.gameEnds();
    }
  }

  round () {
    let attemptsLeft = 3;
    const randomNumber = Math.floor(Math.random() * this.range + 1);
    console.log(randomNumber)
    return ()=>{
      const userNumber = prompt(`
      Enter a number from 0 to ${this.range}\n
      Attempts left: ${attemptsLeft}\n
      Total prize: ${this.totalPrize}$\n
      Possible prize on current attempt: ${this.prizes[3 - attemptsLeft]}`);

      attemptsLeft -= 1;
      if (attemptsLeft === 0 && (+userNumber !== randomNumber)) {
        this.gameEnds();
        return true;
      } else if (+userNumber === randomNumber) {
        this.rightNumber(3 - attemptsLeft);
        return true;
      }
    };
  }

  mounted () {
    while (true) {
      if (confirm('Do you want to play a game?')) {
        break;
      }
      alert('You did not become a millionaire');
    }
    while (true) {
      const newRound = this.round();
      while (true) {
        if (newRound()) { break; }
      }
    }
  }
}
</script>
