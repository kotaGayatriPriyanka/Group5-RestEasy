package com.hcl.model;

import lombok.*;



@Data
@NoArgsConstructor
@AllArgsConstructor
public class ResponseMessage {
    private String message;
    private int errorCode;
}