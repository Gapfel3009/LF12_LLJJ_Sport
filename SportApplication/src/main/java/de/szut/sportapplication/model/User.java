package de.szut.sportapplication.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long userID;

    @Column(nullable = false, unique = true)
    private String email;

    @Column(nullable = false)
    private String passwordHash;

    private String username;
    private Integer streak;

    private Integer xpTotal = 0;
    private Integer xpChest = 0;
    private Integer xpBack = 0;
    private Integer xpShoulders = 0;
    private Integer xpLegs = 0;
    private Integer xpTriceps = 0;
    private Integer xpAbs = 0;
    private Integer xpGlutes = 0;
    private Integer xpBiceps = 0;
    private Integer xpFlexibility = 0;

    @ManyToOne
    @JoinColumn(name = "avatarID")
    private Avatar avatar;
}
