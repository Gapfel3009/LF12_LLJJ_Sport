package de.szut.sportapplication.service;



import io.jsonwebtoken.*;
import io.jsonwebtoken.security.Keys;
import org.springframework.stereotype.Component;

import java.security.Key;
import java.util.Date;

    @Component
    public class JWTAuthService {
        private final Key key = Keys.secretKeyFor(SignatureAlgorithm.HS256);
//todo: zeit höher setzen -- zum testen des token auf 1 std
        private final long loginGültigFür = 1000*60*60;



        public String generateToken(String email) {
            return Jwts.builder()
                    .setSubject(email)
                    .setIssuedAt(new Date())
                    .setExpiration(new Date(System.currentTimeMillis() + loginGültigFür))
                    .signWith(SignatureAlgorithm.HS256, key)
                    .compact();
        }

        public String extractEmail(String token) {
            return Jwts.parser().setSigningKey(key)
                    .parseClaimsJws(token)
                    .getBody()
                    .getSubject();
        }

       public boolean validateToken(String token) {
           try {
               Jwts.parser().setSigningKey(key).parseClaimsJws(token);
               return true;
           } catch (Exception e) {
               return false;
           }
        }
    }
