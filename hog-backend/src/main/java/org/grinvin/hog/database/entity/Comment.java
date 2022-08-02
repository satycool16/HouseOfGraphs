package org.grinvin.hog.database.entity;
import java.time.LocalDateTime;

public record Comment (int commentId, int graphId, int userId, LocalDateTime commentTime, String text){
}
