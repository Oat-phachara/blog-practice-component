import React, { useState } from "react";
import Post from "./Post";
import "./News.css";

function News() {
  const posts = [
    {
      title:
        "[ลือ] Apple Vision Pro เตรียมขายเพิ่มเติมในอีกหลายประเทศ ใกล้ไทยที่สุดคือสิงคโปร์",
      img: "https://www.blognone.com/sites/default/files/styles/thumbnail/public/topics-images/AppleVisionPro.png?itok=6TwOIQ7N",
      content:
        "ข้อมูลนี้มาจาก MacRumors ที่อ้างโค้ดซึ่งค้นพบว่าคีย์บอร์ดเสมือนในเฮดเซต Apple Vision Pro จะรองรับอินพุทเพิ่มเติมอีก 12 ภาษา ซึ่งอาจเป็นข้อมูลช่วยคาดเดาได้ว่า Vision Pro จะขายในประเทศใดเพิ่มเติมในระยะเวลาอันใกล้นี้ ปัจจุบันคีย์บอร์ดบน Vision Pro รองรับเฉพาะภาษาอังกฤษ (สหรัฐอเมริกา) และอีโมจิ 12 ภาษาที่จะเพิ่มเติมใน Vision Pro ได้แก่: จีนตัวเต็ม, จีนตัวย่อ, อังกฤษ (ออสเตรเลีย), อังกฤษ (แคนาดา), อังกฤษ (ญี่ปุ่น), อังกฤษ (สิงคโปร์), อังกฤษ (สหราชอาณาจักร), ฝรั่งเศส (แคนาดา), ฝรั่งเศส (ฝรั่งเศส), เยอรมนี (เยอรมนี), ญี่ปุ่น และเกาหลี",
    },
    {
      title:
        "Resident Evil 4 Remake ขายได้ 7 ล้านชุด, Monster Hunter: World ทะลุ 25 ล้านชุดแล้ว",
      img: "https://www.blognone.com/sites/default/files/styles/thumbnail/public/topics-images/00byin3N_400x400.jpg?itok=4twAdu6d",
      content:
        "Capcom ประกาศความสำเร็จของเกม Resident Evil 4 Remake ทำยอดขายได้เกิน 7 ล้านชุด หลังจากวางขายมาครบ 1 ปีเต็ม แต่ถึงแม้ตัวเลขดูเยอะ หากเทียบกับเกมที่ขายดีสูงสุดของซีรีส์คือ Resident Evil 2 Remake ทำสถิติไว้สูงมากที่ 13.6 ล้านชุด อันดับรองลงมาคือ Resident Evil 7 ตามมาติดๆ ที่ 13 ล้านชุดอีกเกมที่ประกาศยอดขายมาไล่เลี่ยกันคือ Monster Hunter: World ทำยอดขายรวมเกิน 25 ล้านชุด (นับรวมบันเดิลภาคเสริม Iceborne) เป็นเกมยอดขายสูงสุดของซีรีส์ และเป็นเกมที่ขายดีที่สุดตลอดกาลของ Capcom ด้วย ยอดขายรวมของ Resident Evil ทั้งซีรีส์อยู่ที่ 154 ล้านชุด ส่วนยอดขายรวมของ Monster Hunter ทั้งซีรีส์คือ 97 ล้านชุด",
    },
    {
      title:
        "สภาผู้แทนฯ สหรัฐ โหวตผ่านร่างกฎหมายแยก TikTok จาก ByteDance ขั้นตอนถัดไปคือวุฒิสภา",
      img: "https://www.blognone.com/sites/default/files/styles/thumbnail/public/topics-images/tiktok.png?itok=EeIQRqtF",
      content:
        "สภาผู้แทนฯ สหรัฐได้ลงมติพิจารณาร่างกฎหมายให้แยก TikTok ออกจากบริษัทแม่ ByteDance โดยผลการลงมติออกมาสนับสนุนร่างกฎหมายดังกล่าวด้วยคะแนน 352-65 เกิน 2 ใน 3 จึงถือว่าผ่านการอนุมัติ ในขั้นตอนถัดไปร่างกฎหมายจะถูกเสนอพิจารณาต่อวุฒิสภา ซึ่งน่าจะมีขั้นตอนการไต่สวน เป็นระยะเวลาพอสมควร และหากวุฒิสภาอนุมัติ ก็จะเป็นขั้นตอนการลงนามรับรองของประธานาธิบดี Joe Biden ซึ่งก่อนหน้านี้เขาออกความเห็นว่าจะรับรองกฎหมาย หากวุฒิสภาเห็นชอบ",
    },
    {
      title:
        "นี่คือนวัตกรรม ไมโครซอฟท์ยุบรวมไคลเอนต์ Teams ฝั่งองค์กร-ส่วนตัว ล็อกอินหลายบัญชีได้แล้ว",
      img: "https://www.blognone.com/sites/default/files/styles/thumbnail/public/topics-images/ms-teams_0.png?itok=GTcYHIia",
      content:
        "ปัญหาเรื่องไคลเอนต์ Microsoft Teams บนพีซีมี 2 ตัวที่ดันชื่อเหมือนกัน (ต่างกันแค่สีของตัว T และวงเล็บด้านหลัง free กับ work or school) แต่ใช้ร่วมกันไม่ได้ เพราะเป็นบัญชีส่วนตัว vs บัญชีองค์กร สร้างความสับสนให้ผู้ใช้จำนวนมากมายาวนาน ล่าสุดปัญหานี้กำลังจะหมดไป เพราะไมโครซอฟท์จะรวมไคลเอนต์ทั้งสองเวอร์ชันเข้าเป็นตัวเดียวกัน ล็อกอินหลายบัญชีพร้อมกัน กดสลับไปมาที่ไอคอนหน้าเราตรงมุมขวาบนของหน้าจอได้แล้ว (บริษัทที่มีมูลค่ามากที่สุดในโลก เพิ่งคิดได้เนอะ) เราสามารถเปิด Teams สองหน้าต่างแยกบัญชีกัน มีไอคอนที่ Taskbar แยกกันได้ด้วย (ตามภาพมี Teams สีสว่างและสีมืดรันอยู่พร้อมกัน)",
    },
  ];
  const [filter, setfilter] = useState(posts);
  const handleOnSearch = (e) => {
    const value = e.target.value;
    const filtered = posts.filter((post) => {
      return (
        post.title.toLowerCase().includes(value.toLowerCase()) ||
        post.content.toLowerCase().includes(value.toLowerCase())
      );
    });
    setfilter(filtered);
  };

  return (
    <>
      <input
        type="text"
        placeholder="ค้นหาข่าว"
        name="search-box"
        className="input-box"
        onChange={handleOnSearch}
      />
      <p>
        {filter.length ? `ผลลัพธ์จะนวน ${filter.length} รายการ` : `ไม่พบรายการ`}
      </p>
      <div className=" news ">
        {filter.map((i, idx) => (
          <Post key={idx} title={i.title} img={i.img} content={i.content} />
        ))}
      </div>
    </>
  );
}

export default News;
