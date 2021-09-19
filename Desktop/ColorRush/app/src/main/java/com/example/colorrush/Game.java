package com.example.colorrush;

        import android.content.Intent;
        import android.content.res.Resources;
        import android.os.Bundle;
        import com.google.android.material.snackbar.Snackbar;
        import androidx.appcompat.app.AppCompatActivity;
        import android.os.CountDownTimer;
        import android.view.GestureDetector;
        import android.view.MotionEvent;
        import android.view.View;
        import android.view.Menu;
        import android.view.MenuItem;
        import android.widget.Button;
        import android.widget.ImageButton;
        import android.widget.ImageView;
        import android.widget.RelativeLayout;
        import android.widget.TextView;
        import java.util.ArrayList;

public class Game extends AppCompatActivity {

    ArrayList<Collectable> allCollectable= new ArrayList();
    Collectable greenBanana;
    Collectable blueBanana;
    Collectable redBanana;
    Collectable greenApple;
    Collectable blueApple;
    Collectable redApple;
    Collectable greenStraw;
    Collectable blueStraw;
    Collectable redStraw;
    Collectable greenOrange;
    Collectable blueOrange;
    Collectable redOrange;
    Collectable greenCherry;
    Collectable blueCherry;
    Collectable redCherry;
    Collectable lookFor;
    TextView score;
    TextView timerText;
    TextView findText;
    public int scoreNum;
    int time;
    int screenHeight;
    int screenWidth;
    private long remainingTime=60000;
    private CountDownTimer timer;


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        scoreNum=0;
        time=10000;
        score=findViewById(R.id.score_text);
        timerText=findViewById(R.id.timer);
        findText=findViewById(R.id.find_image);

        greenBanana= new Collectable(findViewById(R.id.image_1),"green", "banana",R.drawable.green_banana);
        allCollectable.add(greenBanana);
        greenBanana.getImageButton().setImageResource(R.drawable.green_banana);

        greenApple= new Collectable(findViewById(R.id.image_2),"green", "apple",R.drawable.green_apple);
        allCollectable.add(greenApple);
        greenApple.getImageButton().setImageResource(R.drawable.green_apple);

        greenOrange= new Collectable(findViewById(R.id.image_3),"green", "orange",R.drawable.green_orange);
        allCollectable.add(greenOrange);
        greenOrange.getImageButton().setImageResource(R.drawable.green_orange);

        greenCherry= new Collectable(findViewById(R.id.image_4),"green", "cherry",R.drawable.green_cherry);
        allCollectable.add(greenCherry);
        greenCherry.getImageButton().setImageResource(R.drawable.green_cherry);

        greenStraw= new Collectable(findViewById(R.id.image_5),"green", "strawberry",R.drawable.green_straw);
        allCollectable.add(greenStraw);
        greenStraw.getImageButton().setImageResource(R.drawable.green_straw);

        blueBanana= new Collectable(findViewById(R.id.image_6),"blue", "banana",R.drawable.blue_banana);
        allCollectable.add(blueBanana);
        blueBanana.getImageButton().setImageResource(R.drawable.blue_banana);

        blueApple= new Collectable(findViewById(R.id.image_7),"blue", "apple",R.drawable.blue_apple);
        allCollectable.add(blueApple);
        blueApple.getImageButton().setImageResource(R.drawable.blue_apple);

        blueOrange= new Collectable(findViewById(R.id.image_8),"blue", "orange",R.drawable.blue_orange);
        allCollectable.add(blueOrange);
        blueOrange.getImageButton().setImageResource(R.drawable.blue_orange);

        blueCherry= new Collectable(findViewById(R.id.image_9),"blue", "cherry",R.drawable.blue_cherry);
        allCollectable.add(blueCherry);
        blueCherry.getImageButton().setImageResource(R.drawable.blue_cherry);

        blueStraw= new Collectable(findViewById(R.id.image_10),"blue", "strawberry",R.drawable.blue_straw);
        allCollectable.add(blueStraw);
        blueStraw.getImageButton().setImageResource(R.drawable.blue_straw);

        redBanana= new Collectable(findViewById(R.id.image_11),"red", "banana",R.drawable.red_banana);
        allCollectable.add(redBanana);
        redBanana.getImageButton().setImageResource(R.drawable.red_banana);

        redApple= new Collectable(findViewById(R.id.image_12),"red", "apple",R.drawable.red_apple);
        allCollectable.add(redApple);
        redApple.getImageButton().setImageResource(R.drawable.red_apple);

        redOrange= new Collectable(findViewById(R.id.image_13),"red", "orange",R.drawable.red_orange);
        allCollectable.add(redOrange);
        redOrange.getImageButton().setImageResource(R.drawable.red_orange);

        redCherry= new Collectable(findViewById(R.id.image_14),"red", "cherry",R.drawable.red_cherry);
        allCollectable.add(redCherry);
        redCherry.getImageButton().setImageResource(R.drawable.red_cherry);

        redStraw= new Collectable(findViewById(R.id.image_15),"red", "strawberry",R.drawable.red_straw);
        allCollectable.add(redStraw);
        redStraw.getImageButton().setImageResource(R.drawable.red_straw);
        screenWidth=getScreenWidth();
        screenHeight=getScreenHeight();
        setLookFor(allCollectable);

        for(int j=0;j<allCollectable.size();j++){
            Collectable t=allCollectable.get(j);
            allCollectable.get(j).getImageButton().setOnClickListener(new View.OnClickListener() {
                @Override
                public void onClick(View v) {
                    if(findLookFor(t)){
                        scoreNum++;
                        score.setText("Score: "+scoreNum);
                        setLookFor(allCollectable);
                        runTimer(remainingTime+2000);
                        //add time
                    }else{
                        //subtract time
                        runTimer(remainingTime-5000);
                    }
                }
            });
        }
        setLookFor(allCollectable);
        runTimer(remainingTime);
    }

    private boolean findLookFor(Collectable col){
        if(lookFor==col){
            return true;
        }
        return false;
    }

    private void setLookFor(ArrayList<Collectable> c){
        ImageButton temp;
        ArrayList<Collectable> setImage = new ArrayList<>();
        for(int i=0;i<c.size();i++){
            setImage.add(c.get(i));

        }
        for(int i=0;i<allCollectable.size();i++){
            int randPos=randNum(0,allCollectable.size()-1);
            float currentX=allCollectable.get(i).getImageButton().getX();
            float currentY=allCollectable.get(i).getImageButton().getY();
            float newX=allCollectable.get(randPos).getImageButton().getX();
            float newY=allCollectable.get(randPos).getImageButton().getY();
            allCollectable.get(i).getImageButton().setX(newX);
            allCollectable.get(i).getImageButton().setY(newY);
            allCollectable.get(randPos).getImageButton().setX(currentX);
            allCollectable.get(randPos).getImageButton().setY(currentY);
        }
        int i=randNum(0,allCollectable.size()-1);
        lookFor=allCollectable.get(i);
        findText.setText("Find: "+lookFor.getFruit()+" + "+lookFor.getColor());
    }

    private int randNum(int min, int max){
        return (int)Math.floor(Math.random()*(max-min+1)+min);
    }

    private void runTimer(long timeInMillis){//https://stackoverflow.com/questions/11630493/how-to-add-and-remove-time-on-countdowntimer
            if(timer != null) {
                timer.cancel();
            }
            timer = new CountDownTimer(timeInMillis, 1000) {
                int min=0;
                int sec=0;
                int secTillChange=0;
                @Override
                public void onTick(final long millisUntilFinished) {
                sec=(int)(millisUntilFinished/1000);
                if(sec>59){
                    min=(int)(millisUntilFinished/60000);
                }else{
                    min=0;
                }
                sec=sec%60;
                if(sec<10){
                    timerText.setText(min+":0"+sec);
                }else{
                    timerText.setText(min+":"+sec);
                }

                secTillChange++;
                remainingTime = millisUntilFinished;
                    if(timeInMillis<30000 && secTillChange>3){
                        secTillChange=0;
                        setLookFor(allCollectable);
                    }
                }

                @Override
                public void onFinish() {
                    timerText.setText("");
                    findText.setText("");
                    Intent i = new Intent(getApplicationContext(), PopActivity.class);
                    startActivity(i);
                }
            }.start();
    }
    public static int getScreenWidth() {
        return Resources.getSystem().getDisplayMetrics().widthPixels;
    }

    public static int getScreenHeight() {
        return Resources.getSystem().getDisplayMetrics().heightPixels;
    }
}