package de.szut.sportapplication.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "app_user")
public class AppUser {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "user_id")
    private int userID;

    @Column(name = "email_address",nullable = false, unique = true)
    private String email;

    @Column(name = "password_hash",nullable = false)
    private String passwordHash;

    private String username;

 //   @Column(name = "avatar_id")
  //  private Integer avatarId;

    private Integer streak;

    @Column(name = "xp_total")
    private Integer xpTotal = 0;

    @Column(name = "xp_chest")
    private Integer xpChest = 0;

    @Column(name = "xp_back")
    private Integer xpBack = 0;

    @Column(name = "xp_shoulders")
    private Integer xpShoulders = 0;

    @Column(name = "xp_legs")
    private Integer xpLegs = 0;

    @Column(name = "xp_triceps")
    private Integer xpTriceps = 0;

    @Column(name = "xp_abs")
    private Integer xpAbs = 0;

    @Column(name = "xp_glutes")
    private Integer xpGlutes = 0;

    @Column(name = "xp_biceps")
    private Integer xpBiceps = 0;

    @Column(name = "xp_flexibility")
    private Integer xpFlexibility = 0;

    @ManyToOne
  @JoinColumn(name = "avatar_id")
    private Avatar avatarID;

    public int getUserID() {
        return userID;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPasswordHash() {
        return passwordHash;
    }

    public void setPasswordHash(String passwordHash) {
        this.passwordHash = passwordHash;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public Integer getStreak() {
        return streak;
    }

    public void setStreak(Integer streak) {
        this.streak = streak;
    }

    public Integer getXpTotal() {
        return xpTotal;
    }

    public void setXpTotal(Integer xpTotal) {
        this.xpTotal = xpTotal;
    }

    public Integer getXpChest() {
        return xpChest;
    }

    public void setXpChest(Integer xpChest) {
        this.xpChest = xpChest;
    }

    public Integer getXpBack() {
        return xpBack;
    }

    public void setXpBack(Integer xpBack) {
        this.xpBack = xpBack;
    }

    public Integer getXpShoulders() {
        return xpShoulders;
    }

    public void setXpShoulders(Integer xpShoulders) {
        this.xpShoulders = xpShoulders;
    }

    public Integer getXpLegs() {
        return xpLegs;
    }

    public void setXpLegs(Integer xpLegs) {
        this.xpLegs = xpLegs;
    }

    public Integer getXpTriceps() {
        return xpTriceps;
    }

    public void setXpTriceps(Integer xpTriceps) {
        this.xpTriceps = xpTriceps;
    }

    public Integer getXpAbs() {
        return xpAbs;
    }

    public void setXpAbs(Integer xpAbs) {
        this.xpAbs = xpAbs;
    }

    public Integer getXpGlutes() {
        return xpGlutes;
    }

    public void setXpGlutes(Integer xpGlutes) {
        this.xpGlutes = xpGlutes;
    }

    public Integer getXpBiceps() {
        return xpBiceps;
    }

    public void setXpBiceps(Integer xpBiceps) {
        this.xpBiceps = xpBiceps;
    }

    public Integer getXpFlexibility() {
        return xpFlexibility;
    }

    public void setXpFlexibility(Integer xpFlexibility) {
        this.xpFlexibility = xpFlexibility;
    }

    public Avatar getAvatarID() {
        return avatarID;
    }

    public void setAvatarID(Avatar avatarID) {
        this.avatarID = avatarID;
    }
}
