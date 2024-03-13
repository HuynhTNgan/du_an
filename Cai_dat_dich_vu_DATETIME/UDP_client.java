import java.util.*;
import java.net.*;

public class UDP_client {
    public static void main(String[] args) {

        try {
            //tao UDP socket cho client
            DatagramSocket ds = new DatagramSocket();
            while(true) {
                //nhap yeu cau
                Scanner kb = new Scanner(System.in);
                System.out.println("Nhap yeu cau(chuoi rong) : ");
                String str = kb.nextLine();

                //kt dieu kien thoat
                if(str.equals("exit"))  break;

                //dong goi yeu cau
                byte b[] = str.getBytes();
                int n = str.length();
                InetAddress dc = InetAddress.getByName("127.0.0.1");
                int p =13;
                DatagramPacket goigui = new DatagramPacket(b, n, dc, p);

                //gui goi cho server
                ds.send(goigui);

                //nhan gui UDP tu server
                byte b1[] = new byte[60000];
                DatagramPacket goinhan = new DatagramPacket(b1, 60000);
                ds.receive(goinhan);

                //lay du lieu ra
                byte b2[] = goinhan.getData();
                int len2 = goinhan.getLength();
                String kq = new String(b2, 0, len2);
                System.out.println("Date : " + kq);
            }

        } catch (Exception e) {
            System.out.println(e);
        }
    }
}
