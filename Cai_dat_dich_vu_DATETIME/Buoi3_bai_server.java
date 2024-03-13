import java.net.*;
import java.util.*;

public class Buoi3_bai_server {
    public static void main(String[] args) {
        try {
            //khoi tao UDP server port 13
            DatagramSocket ds = new DatagramSocket(13);
            System.out.println("Khoi tao thanh cong server");
            //nhan goi yeu cau tu client
            byte b[] = new byte[60000];
            DatagramPacket goinhan = new DatagramPacket(b, 60000);

            while(true) {
                ds.receive(goinhan);

                byte b1[] = goinhan.getData();
                int len1 = goinhan.getLength();
                InetAddress dc = goinhan.getAddress();
                int p = goinhan.getPort();

                String yeucau = new String(b1, 0, len1);
                //xu li yeu cau
                if(yeucau.equals("")) {
                    Date date = new Date();
                    String time = date.toString();
                    System.out.println(time);
                    //dong goi ket qua
                    byte b2[] = time.getBytes();
                    int len2 = time.length();
                    DatagramPacket goigui = new DatagramPacket(b2, len2, dc, p);

                    //gui goi cho client
                    ds.send(goigui);
                }
                else {
                    String tb = "Nhap sai cau lenh";
                    byte b3[] = tb.getBytes();
                    int len3 = tb.length();
                    //dong goi ket qua
                    DatagramPacket goigui1 = new DatagramPacket(b3, len3, dc, p);

                    //gui thong bao cho client
                    ds.send(goigui1);
                }
            }

        } catch (Exception e) {
            System.out.println(e);
        }
    }
}
