public class Solution {
    // given a list of types of files and their sizes in form of a string
    // return a string that categorizes and returns size of file in each category
    // EXAMPLE: given : ["mymusic.mp3 110b", "myfile.zip 111b", "myvideo.mp4 124b" , "myvideo2.avi 450b", "mytexts.txt 23b"],
    // return : "Music 110b Videos 574b Files 111b Others 23b"
    
    public String sortFiles(String[] input) {
        if (input.length == 0 || input == null) {
            return "";
        }
        String result = "";
        HashMap<String, Integer> map = new HashMap<>();
        int Music, Videos, Files, Others;
        Music = Videos = Files = Others = 0;

        this.populateMap(map);
        
        // Made the design decision to compare against string values rather than using regex
        // for easier readability and similar runtimes 
        for (int i = 0; i < input.length; i++) {
            int j = 0;
            String fileType;
            String fileName = input[i];
            while (filename.charAt(j) != ".") {
                j++;
            }
            fileType = Integer.parseInt(filename.subString(j, j+3));
            if (map.containsKey(fileType)) {
                int left, right;
                while (filename.charAt(j) != " ") {
                    j++;
                } 
                left = j;
                while (filename.charAt(j) != "b") {
                    j++;
                }
                right = j;
                
            } else return "Input Array at index " + i + " is not formatted correctly. ";
            
        }



    }
    // individually populate map with accepted filetypes and their categories
    // KEY: type of file
    // VAL: category of file
    public void populateMap(HashMap<String, Integer> map) {
        map.put(".mp3", "Music");
        map.put(".zip", "Files");
        map.put(".mp4", "Videos");
        map.put(".avi", "Videos");
        map.put(".txt", "Others";
    }
}
