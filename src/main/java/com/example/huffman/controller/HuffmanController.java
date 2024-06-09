
package com.example.huffman.controller;

import com.example.huffman.service.HuffmanService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@Controller
public class HuffmanController {

    @Autowired
    private HuffmanService huffmanService;

    @GetMapping("/")
    public String index() {
        return "index";
    }

    @PostMapping("/compress")
    @ResponseBody
    public String compress(@RequestParam("file") MultipartFile file, Model model) throws IOException {
        String content = new String(file.getBytes());
        String encodedText = null;
		try {
			encodedText = huffmanService.encode(content);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
        return encodedText;
    }

    @PostMapping("/decompress")
    @ResponseBody
    public String decompress(@RequestParam("file") MultipartFile file) throws IOException {
        String encodedContent = new String(file.getBytes());
        String decodedText = null;
		try {
			decodedText = huffmanService.decode(encodedContent);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
        return decodedText;
    }
}
