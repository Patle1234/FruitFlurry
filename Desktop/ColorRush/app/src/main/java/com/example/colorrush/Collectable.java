package com.example.colorrush;

import android.media.Image;
import android.widget.ImageButton;

public class Collectable {
    String fruit;
    String color;
    ImageButton imageButton;
    int image;
    public Collectable(ImageButton img, String color, String fruit, int i){
        imageButton=img;
        this.fruit=fruit;
        this.color=color;
        image =i;
    }

    public String getColor() {
        return color;
    }

    public String getFruit() {
        return fruit;
    }

    public ImageButton getImageButton() {
        return imageButton;
    }


}
