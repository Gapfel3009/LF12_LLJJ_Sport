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
  @JoinColumn(name = "avatarID")
    private Avatar avatarID;
}
