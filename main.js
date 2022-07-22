noseX = 0;
noseY = 0;
function preload()
{
    mustach = loadImage("https://i.postimg.cc/Qtz7Ltxw/clipart-mustache-mustache-italian.png");

}

function setup()
{
    canvas = createCanvas(350 , 350);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300 , 400);
    video.hide();

    poseNet = ml5. poseNet(video,modelLoaded);
    poseNet.on('pose',gotPose);
}

function draw()
{
    image(video,0,0,350,350);
    image(mustach,noseX,noseY,50,50);

}

function take_snapshot()
{
    save("Filter img.png");
}

function modelLoaded()
{
    console.log("poseNet is initialized");
}

function gotPose(results)
{
    if(results.length>0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("nose x =" + results[0].pose.nose.x);
        console.log("nose y =" + results[0].pose.nose.y);
    }
}