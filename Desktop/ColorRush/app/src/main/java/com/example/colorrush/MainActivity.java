package com.example.colorrush;

import android.content.Intent;
import android.content.res.Resources;
import android.os.Bundle;
import android.os.CountDownTimer;
import android.view.MotionEvent;
import android.view.View;
import android.view.ViewAnimationUtils;
import android.widget.Button;
import android.widget.TextView;

import androidx.appcompat.app.AppCompatActivity;

import java.util.ArrayList;

public class MainActivity extends AppCompatActivity {
    float x1,x2,y1,y2;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.start_page);
        configureNext();
    }

    private void configureNext(){
        Button startButton=findViewById(R.id.start);
        startButton.setOnClickListener(new View.OnClickListener(){
            @Override
            public void onClick(View v) {
                System.out.println("in Here");
                startActivity(new Intent(MainActivity.this, Game.class));
                System.out.println("start");
            }
        });
    }


}




