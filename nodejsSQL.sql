#데이터베이스 설정
show databases;
#데이터베이스 생성
create database nodejs;
#데이터베이스 사용** ===> 껐다 켤때마다 다시 실행해줘야함!!!!!!!!!!!!!!!!!!!!!
use nodejs

select * from sessions

#테이블 생성
create table nodejs_member(
	id varchar(100),
    pw varchar(100),
    nick varchar(100)
);
#데이터 입력
insert into nodejs_member values('1','1','1');
#데이터 검색
select * from nodejs_member;
#데이터 수정
update nodejs_member
set nick = '1234'
where id = '1';

#데이터 삭제
delete from nodejs_member where id = 1;

