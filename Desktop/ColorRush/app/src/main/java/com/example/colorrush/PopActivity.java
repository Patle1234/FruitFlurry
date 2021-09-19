package com.example.colorrush;

import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;
import android.util.DisplayMetrics;
import android.view.Gravity;
import android.view.View;
import android.view.WindowManager;
import android.widget.Button;

import androidx.appcompat.app.AppCompatActivity;

public class PopActivity extends Activity{//https://www.youtube.com/watch?v=eX-TdY6bLdg
    Button returnButton;
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.pop_activity);
        DisplayMetrics dm =new DisplayMetrics();
        getWindowManager().getDefaultDisplay().getMetrics(dm);
        int width=dm.widthPixels;
        int height=dm.heightPixels;
        getWindow().setLayout((int)(width*.8), (int)(height*.7));

        WindowManager.LayoutParams params=getWindow().getAttributes();
        params.gravity= Gravity.CENTER;
        params.x=0;
        params.y=-20;
        getWindow().setAttributes(params);

        returnButton=findViewById(R.id.return_start_btn);
        returnButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                configureNext();
            }
        });
    }
    private void configureNext(){
       // Button startButton=findViewById(R.id.start);
        returnButton.setOnClickListener(new View.OnClickListener(){
            @Override
            public void onClick(View v) {
                System.out.println("in Here");
                startActivity(new Intent(PopActivity.this, MainActivity.class));
                System.out.println("start");
            }
        });
    }
}
