$(function(){
  function decideRamen(userChoice) {
    const ramens = ["醤油", "塩", "味噌"];
    let shuffleCount = 10; // シャッフル回数
    let current = 0;

    // シャッフルアニメーション
    const shuffleInterval = setInterval(() => {
      const rand = Math.floor(Math.random() * 3);
      $("#ramen_result").text(`今日のおすすめラーメンは…${ramens[rand]}？`);
      current++;
      if(current >= shuffleCount){
        clearInterval(shuffleInterval);
        showFinalResult();
      }
    }, 60); // 60ミリ秒ごとにシャッフル

    function showFinalResult(){
      const random = Math.floor(Math.random() * 3);
      const todayRamen = ramens[random];
      $("#ramen_result")
        .text(`今日のおすすめラーメンは…${todayRamen}！`)
        .css({ "font-size": "2em", "color": "#e60012" })
        .hide()
        .fadeIn(400);

      if (userChoice === todayRamen) {
        $("#comment").text("あなたの直感は大正解！");
      } else {
        $("#comment").text("たまには違う味も試してみよう！");
      }
    }
  }

  $("#shoyu_btn").on("click", function() {
    decideRamen("醤油");
  });
  $("#shio_btn").on("click", function() {
    decideRamen("塩");
  });
  $("#miso_btn").on("click", function() {
    decideRamen("味噌");
  });
});
