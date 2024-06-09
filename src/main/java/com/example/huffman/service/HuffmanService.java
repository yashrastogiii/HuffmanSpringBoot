package com.example.huffman.service;

import com.example.huffman.model.HuffmanCode;
import org.springframework.stereotype.Service;

@Service
public class HuffmanService {

    private HuffmanCode huffmanCode;

    public String encode(String content) throws Exception {
        huffmanCode = new HuffmanCode(content);
        return huffmanCode.encode(content);
    }

    public String decode(String encodedContent) throws Exception {
        return huffmanCode.decode(encodedContent);
    }
}
