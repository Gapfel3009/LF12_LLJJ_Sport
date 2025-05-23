package de.szut.sportapplication.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity

@NoArgsConstructor
@AllArgsConstructor
public class Avatar {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "avatar_id")
    private Integer avatarID;

    @Column(name = "filename")
    private String fileName;

    @Column(name = "full_path")
    private String fullPath;

    public Integer getAvatarId() {
        return this.avatarID;
    }

    public void setAvatarId(Integer avatarId) {
        this.avatarID = avatarId;
    }

    public String getFilename() {
        return fileName;
    }

    public void setFilename(String filename) {
        this.fileName = filename;
    }

    public String getFullPath() {
        return fullPath;
    }

    public void setFullPath(String fullPath) {
        this.fullPath = fullPath;
    }

}
