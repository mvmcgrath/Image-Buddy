package com.github.mvmcgrath.server.model;

import javax.persistence.*;

@Entity
@Table(name = "images")
public class Image {

    @Id
    @Column(name="imageId")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long imageId;

    @Column(name = "title")
    private String title;

    @Column(name = "image", length=100000)
    private String image;

    public Image() {

    }

    public Image(long imageId, String title, String image) {
        super();
        this.imageId = imageId;
        this.title = title;
        this.image = image;
    }

    public long getImageId() {
        return imageId;
    }

    public String getTitle() {
        return title;
    }

    public String getImage() {
        return image;
    }

    public void setImageId(long imageId) {
        this.imageId = imageId;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public void setImage(String image) { this.image = image; }
}

