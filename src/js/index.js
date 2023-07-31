window.onload = function () {
    let clip = document.querySelector(".video")
    let clip_1 = document.querySelector(".video_1")
    let clip_2 = document.querySelector(".video_2")
    let clip_3 = document.querySelector(".video_3")

    clip.addEventListener("mouseover", function (e) {
                 console.log("플레이 버튼 클릭");
        clip.play();
    })

    clip.addEventListener("mouseout", function (e) {
        clip.pause();
    })
    
    clip_1.addEventListener("mouseover", function (e) {
        clip_1.play();
    })

    clip_1.addEventListener("mouseout", function (e) {
        clip_1.pause();
    })
    // 
    clip_2.addEventListener("mouseover", function (e) {
        clip_2.play();
    })

    clip_2.addEventListener("mouseout", function (e) {
        clip_2.pause();
    })
    // 
    clip_3.addEventListener("mouseover", function (e) {
        clip_3.play();
    })

    clip_3.addEventListener("mouseout", function (e) {
        clip_3.pause();
    })
}