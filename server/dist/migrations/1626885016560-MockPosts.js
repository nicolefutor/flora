"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MockPosts1626885016560 = void 0;
class MockPosts1626885016560 {
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`insert into post (title, text, "creatorId", "createdAt") values ('American Pie Presents The Naked Mile (American Pie 5: The Naked Mile)', 'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.', 1, '2021-06-26T20:30:51Z');
        insert into post (title, text, "creatorId", "createdAt") values ('Ballad of the Sad Cafe, The', 'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.
        
        Fusce consequat. Nulla nisl. Nunc nisl.
        
        Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.', 1, '2020-11-03T18:24:24Z');
        insert into post (title, text, "creatorId", "createdAt") values ('Phenix City Story, The', 'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.', 1, '2021-07-05T20:22:31Z');
        insert into post (title, text, "creatorId", "createdAt") values ('Bikini Summer III - South Beach Heat', 'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.', 1, '2021-01-17T16:59:24Z');
        insert into post (title, text, "creatorId", "createdAt") values ('Full Tilt Boogie', 'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.', 1, '2021-03-22T03:01:46Z');
        insert into post (title, text, "creatorId", "createdAt") values ('The Six Million Dollar Man', 'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.
        
        Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.', 1, '2021-06-12T11:17:49Z');
        insert into post (title, text, "creatorId", "createdAt") values ('Twilight of the Golds, The', 'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.', 1, '2020-11-14T06:32:16Z');
        insert into post (title, text, "creatorId", "createdAt") values ('Chamber, The', 'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.', 1, '2021-04-13T14:33:14Z');
        insert into post (title, text, "creatorId", "createdAt") values ('Final Season, The', 'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.', 1, '2021-03-24T14:29:20Z');
        insert into post (title, text, "creatorId", "createdAt") values ('Candles on Bay Street ', 'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.
        
        Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 1, '2021-06-04T08:05:38Z');
        insert into post (title, text, "creatorId", "createdAt") values ('Sunday in the Country, A (Un dimanche à la campagne)', 'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.
        
        Phasellus in felis. Donec semper sapien a libero. Nam dui.
        
        Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.', 1, '2021-04-05T12:25:42Z');
        insert into post (title, text, "creatorId", "createdAt") values ('Theory of Flight, The', 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.
        
        Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.', 1, '2021-03-18T05:19:32Z');
        insert into post (title, text, "creatorId", "createdAt") values ('I Was Monty''s Double', 'In congue. Etiam justo. Etiam pretium iaculis justo.
        
        In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.', 1, '2020-11-28T08:02:25Z');
        insert into post (title, text, "creatorId", "createdAt") values ('Pax Americana and the Weaponization of Space', 'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.
        
        Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.', 1, '2021-05-08T16:30:54Z');
        insert into post (title, text, "creatorId", "createdAt") values ('Caesar (Julius Caesar)', 'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.
        
        Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.
        
        Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.', 1, '2021-05-11T08:37:46Z');
        insert into post (title, text, "creatorId", "createdAt") values ('Jewel of the Nile, The', 'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.
        
        Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.
        
        Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.', 1, '2021-06-01T03:10:15Z');
        insert into post (title, text, "creatorId", "createdAt") values ('Woodmans, The', 'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.', 1, '2020-12-03T06:18:00Z');
        insert into post (title, text, "creatorId", "createdAt") values ('The Dependent', 'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.
        
        Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.', 1, '2020-10-24T06:22:52Z');
        insert into post (title, text, "creatorId", "createdAt") values ('About Elly (Darbareye Elly)', 'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.
        
        Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.', 1, '2020-09-15T00:00:02Z');
        insert into post (title, text, "creatorId", "createdAt") values ('Hedwig and the Angry Inch', 'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.', 1, '2020-08-16T06:30:26Z');
        insert into post (title, text, "creatorId", "createdAt") values ('Once Upon a Time in America', 'Sed ante. Vivamus tortor. Duis mattis egestas metus.
        
        Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.
        
        Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.', 1, '2021-02-09T13:48:30Z');
        insert into post (title, text, "creatorId", "createdAt") values ('Scientist, The', 'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.', 1, '2020-11-22T05:39:07Z');
        insert into post (title, text, "creatorId", "createdAt") values ('Crazy Mama', 'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.
        
        Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.
        
        Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.', 1, '2021-03-25T23:48:26Z');
        insert into post (title, text, "creatorId", "createdAt") values ('My Name is Juani (Yo soy la Juani)', 'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.
        
        Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
        
        Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.', 1, '2021-06-26T18:45:26Z');
        insert into post (title, text, "creatorId", "createdAt") values ('Trojan Eddie', 'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.
        
        Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.', 1, '2020-11-10T13:19:15Z');
        insert into post (title, text, "creatorId", "createdAt") values ('Beans of Egypt, Maine, The', 'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.
        
        Sed ante. Vivamus tortor. Duis mattis egestas metus.
        
        Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.', 1, '2021-02-18T05:16:35Z');
        insert into post (title, text, "creatorId", "createdAt") values ('Death of a President', 'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.', 1, '2021-01-08T18:58:13Z');
        insert into post (title, text, "creatorId", "createdAt") values ('Boy Meets Boy', 'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.
        
        In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.
        
        Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.', 1, '2021-04-08T11:36:40Z');
        insert into post (title, text, "creatorId", "createdAt") values ('Three Lives and Only One Death (Trois vies & une seule mort)', 'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.', 1, '2021-07-02T06:45:57Z');
        insert into post (title, text, "creatorId", "createdAt") values ('Suddenly, Last Summer', 'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.
        
        Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.
        
        Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.', 1, '2020-07-29T22:28:10Z');
        insert into post (title, text, "creatorId", "createdAt") values ('Affair of the Heart, An', 'In congue. Etiam justo. Etiam pretium iaculis justo.', 1, '2020-07-29T13:22:11Z');
        insert into post (title, text, "creatorId", "createdAt") values ('24 Hour Party People', 'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.
        
        Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.
        
        Fusce consequat. Nulla nisl. Nunc nisl.', 1, '2020-10-28T01:30:38Z');
        insert into post (title, text, "creatorId", "createdAt") values ('Squanto: A Warrior''s Tale', 'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.
        
        Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.
        
        Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.', 1, '2020-09-06T06:15:59Z');
        insert into post (title, text, "creatorId", "createdAt") values ('True Story of Jesse James, The', 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.
        
        Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.', 1, '2020-09-23T08:30:54Z');
        insert into post (title, text, "creatorId", "createdAt") values ('Smart Money', 'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.', 1, '2021-04-29T23:51:27Z');
        insert into post (title, text, "creatorId", "createdAt") values ('Apple, The', 'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 1, '2021-01-24T01:57:38Z');
        insert into post (title, text, "creatorId", "createdAt") values ('Sunday Day in Hell, A (En forårsdag i Helvede)', 'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.
        
        Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.', 1, '2020-08-16T02:08:50Z');
        insert into post (title, text, "creatorId", "createdAt") values ('Fate (Yazgi)', 'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.
        
        Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.', 1, '2020-11-15T09:34:43Z');
        insert into post (title, text, "creatorId", "createdAt") values ('Rasputin', 'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.', 1, '2021-04-01T10:46:27Z');
        insert into post (title, text, "creatorId", "createdAt") values ('Threesome', 'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.
        
        In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.', 1, '2020-11-28T07:10:31Z');
        insert into post (title, text, "creatorId", "createdAt") values ('Ambition', 'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.
        
        Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
        
        Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.', 1, '2021-04-30T21:42:53Z');
        insert into post (title, text, "creatorId", "createdAt") values ('Hedd Wyn', 'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.', 1, '2021-03-23T08:53:06Z');
        insert into post (title, text, "creatorId", "createdAt") values ('Slither', 'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.
        
        Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.
        
        Phasellus in felis. Donec semper sapien a libero. Nam dui.', 1, '2021-02-05T03:36:24Z');
        insert into post (title, text, "creatorId", "createdAt") values ('My Friend Irma Goes West', 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.
        
        Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.', 1, '2021-06-01T21:38:04Z');
        insert into post (title, text, "creatorId", "createdAt") values ('Rovaniemen markkinoilla', 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.', 1, '2021-02-11T13:45:54Z');
        insert into post (title, text, "creatorId", "createdAt") values ('Empire', 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.
        
        Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.
        
        Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 1, '2021-03-23T02:51:39Z');
        insert into post (title, text, "creatorId", "createdAt") values ('Brussels Business, The', 'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.
        
        Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.
        
        Phasellus in felis. Donec semper sapien a libero. Nam dui.', 1, '2020-08-23T06:08:17Z');
        insert into post (title, text, "creatorId", "createdAt") values ('Five Wives, Three Secretaries and Me', 'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.', 1, '2021-01-01T01:05:36Z');
        insert into post (title, text, "creatorId", "createdAt") values ('Adventures of Food Boy, The (aka High School Superhero)', 'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.
        
        Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.', 1, '2020-12-01T12:16:58Z');
        insert into post (title, text, "creatorId", "createdAt") values ('Betrayed', 'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.', 1, '2021-03-17T02:15:21Z');
        insert into post (title, text, "creatorId", "createdAt") values ('Hot Millions', 'In congue. Etiam justo. Etiam pretium iaculis justo.
        
        In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.', 1, '2020-12-28T20:01:57Z');
        insert into post (title, text, "creatorId", "createdAt") values ('December Boys', 'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.
        
        Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.
        
        Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.', 1, '2020-09-07T02:52:09Z');
        insert into post (title, text, "creatorId", "createdAt") values ('County Teacher, The (Venkovský ucitel)', 'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.
        
        Phasellus in felis. Donec semper sapien a libero. Nam dui.
        
        Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.', 1, '2020-10-04T19:18:54Z');
        insert into post (title, text, "creatorId", "createdAt") values ('Boys, Les', 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.', 1, '2021-04-21T16:29:24Z');
        insert into post (title, text, "creatorId", "createdAt") values ('Blood Money', 'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.
        
        In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.
        
        Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.', 1, '2020-09-21T19:59:31Z');
        insert into post (title, text, "creatorId", "createdAt") values ('For Ever Mozart', 'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.
        
        In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.', 1, '2020-10-01T12:49:21Z');
        insert into post (title, text, "creatorId", "createdAt") values ('Back in Business', 'Fusce consequat. Nulla nisl. Nunc nisl.', 1, '2020-10-02T09:10:50Z');
        insert into post (title, text, "creatorId", "createdAt") values ('Kentucky Fried Movie, The', 'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.
        
        Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.', 1, '2021-05-01T14:57:39Z');
        insert into post (title, text, "creatorId", "createdAt") values ('Penny Dreadful', 'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.', 1, '2020-08-02T13:30:51Z');
        insert into post (title, text, "creatorId", "createdAt") values ('Deliverance', 'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.
        
        Phasellus in felis. Donec semper sapien a libero. Nam dui.', 1, '2020-09-28T10:18:10Z');
        insert into post (title, text, "creatorId", "createdAt") values ('Superman/Batman: Public Enemies', 'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.
        
        Phasellus in felis. Donec semper sapien a libero. Nam dui.', 1, '2021-02-25T17:07:07Z');
        insert into post (title, text, "creatorId", "createdAt") values ('Cabaret Balkan (Bure Baruta)', 'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.
        
        Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.
        
        In congue. Etiam justo. Etiam pretium iaculis justo.', 1, '2021-05-29T00:10:01Z');
        insert into post (title, text, "creatorId", "createdAt") values ('Asterix & Obelix: God Save Britannia (Astérix et Obélix: Au service de Sa Majesté)', 'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.
        
        Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.
        
        Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.', 1, '2020-10-05T15:11:58Z');
        insert into post (title, text, "creatorId", "createdAt") values ('Doppelganger', 'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.
        
        In congue. Etiam justo. Etiam pretium iaculis justo.', 1, '2020-08-18T17:17:30Z');
        insert into post (title, text, "creatorId", "createdAt") values ('Motivation, The', 'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.
        
        Fusce consequat. Nulla nisl. Nunc nisl.', 1, '2021-02-02T01:36:13Z');
        insert into post (title, text, "creatorId", "createdAt") values ('Munekata Sisters, The (Munekata kyôdai)', 'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.', 1, '2021-04-23T08:17:52Z');
        insert into post (title, text, "creatorId", "createdAt") values ('Purple Noon (Plein soleil)', 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.
        
        Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.', 1, '2021-03-13T06:58:10Z');
        insert into post (title, text, "creatorId", "createdAt") values ('Ivans xtc.', 'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.', 1, '2020-08-25T05:22:38Z');
        insert into post (title, text, "creatorId", "createdAt") values ('Blame (6 Films to Keep You Awake) (Películas para no dormir: La culpa)', 'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.', 1, '2021-05-17T06:50:18Z');
        insert into post (title, text, "creatorId", "createdAt") values ('Gun in Betty Lou''s Handbag, The', 'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.', 1, '2020-09-11T13:49:04Z');
        insert into post (title, text, "creatorId", "createdAt") values ('Evil That Men Do, The', 'Fusce consequat. Nulla nisl. Nunc nisl.
        
        Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.', 1, '2020-12-27T22:49:20Z');
        insert into post (title, text, "creatorId", "createdAt") values ('Kiss and Make-Up', 'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.
        
        Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.', 1, '2021-03-02T18:33:18Z');
        insert into post (title, text, "creatorId", "createdAt") values ('Jude', 'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.', 1, '2021-02-18T21:15:21Z');
        insert into post (title, text, "creatorId", "createdAt") values ('City Dark, The', 'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.
        
        Fusce consequat. Nulla nisl. Nunc nisl.', 1, '2021-07-04T17:12:24Z');
        insert into post (title, text, "creatorId", "createdAt") values ('Prey, The (La proie)', 'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.
        
        In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.
        
        Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.', 1, '2021-01-22T00:53:52Z');
        insert into post (title, text, "creatorId", "createdAt") values ('Love and Death on Long Island', 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.
        
        Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.', 1, '2021-01-09T00:12:48Z');
        insert into post (title, text, "creatorId", "createdAt") values ('Medicine Man', 'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.', 1, '2020-09-29T16:53:42Z');
        insert into post (title, text, "creatorId", "createdAt") values ('Ballast', 'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.
        
        In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.
        
        Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.', 1, '2021-01-03T10:12:54Z');
        insert into post (title, text, "creatorId", "createdAt") values ('Dragon Missile, The (Fei long zhan)', 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.
        
        Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.
        
        Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.', 1, '2020-10-12T04:06:24Z');
        insert into post (title, text, "creatorId", "createdAt") values ('Twilight of a Woman''s Soul (Sumerki zhenskoi dushi)', 'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.
        
        Fusce consequat. Nulla nisl. Nunc nisl.', 1, '2020-08-04T21:51:01Z');
        insert into post (title, text, "creatorId", "createdAt") values ('Bjarnfreðarson', 'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.
        
        Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.
        
        Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.', 1, '2021-01-05T17:21:36Z');
        insert into post (title, text, "creatorId", "createdAt") values ('Gabriel Over the White House', 'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.
        
        Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.', 1, '2021-06-06T07:18:14Z');
        insert into post (title, text, "creatorId", "createdAt") values ('Puff, Puff, Pass', 'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.
        
        Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.
        
        Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.', 1, '2021-02-15T09:47:39Z');
        insert into post (title, text, "creatorId", "createdAt") values ('Against One Another, Virtually Friends', 'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.
        
        Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.
        
        Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.', 1, '2020-10-06T10:47:16Z');
        insert into post (title, text, "creatorId", "createdAt") values ('Racket, The', 'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.', 1, '2021-07-01T06:34:42Z');
        insert into post (title, text, "creatorId", "createdAt") values ('Dangerous Moves (La diagonale du fou)', 'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.
        
        In congue. Etiam justo. Etiam pretium iaculis justo.
        
        In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.', 1, '2020-09-15T13:13:06Z');
        insert into post (title, text, "creatorId", "createdAt") values ('Support Your Local Sheriff!', 'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.
        
        Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.', 1, '2021-07-10T03:02:38Z');
        insert into post (title, text, "creatorId", "createdAt") values ('Shaolin Soccer (Siu lam juk kau)', 'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.', 1, '2021-07-07T14:53:38Z');
        insert into post (title, text, "creatorId", "createdAt") values ('Don''t Give Up the Ship', 'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.
        
        Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.
        
        Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.', 1, '2020-10-31T23:48:04Z');
        insert into post (title, text, "creatorId", "createdAt") values ('Sunshine Cleaning', 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.
        
        Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.', 1, '2020-12-25T08:35:05Z');
        insert into post (title, text, "creatorId", "createdAt") values ('Duel at Silver Creek, The', 'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.
        
        Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.
        
        Fusce consequat. Nulla nisl. Nunc nisl.', 1, '2020-08-28T14:02:16Z');
        insert into post (title, text, "creatorId", "createdAt") values ('Sing Your Song', 'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.', 1, '2020-10-29T06:56:55Z');
        insert into post (title, text, "creatorId", "createdAt") values ('Suzhou River (Suzhou he)', 'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.
        
        Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.', 1, '2021-05-21T16:30:58Z');
        insert into post (title, text, "creatorId", "createdAt") values ('Rabid Grannies (Mémés cannibales, Les)', 'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.
        
        Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.
        
        Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.', 1, '2021-02-22T17:26:35Z');
        insert into post (title, text, "creatorId", "createdAt") values ('Big Lift, The', 'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.
        
        Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.', 1, '2021-06-23T09:21:26Z');
        insert into post (title, text, "creatorId", "createdAt") values ('Il Mare (Siworae)', 'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.
        
        Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.
        
        Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.', 1, '2021-06-08T04:58:41Z');
        insert into post (title, text, "creatorId", "createdAt") values ('My Life in Ruins', 'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.
        
        Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.', 1, '2021-06-15T13:12:10Z');
        insert into post (title, text, "creatorId", "createdAt") values ('You''ll Find Out', 'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.
        
        Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.', 1, '2020-08-19T06:26:32Z');
        insert into post (title, text, "creatorId", "createdAt") values ('Let the Fire Burn', 'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.
        
        Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.', 1, '2021-07-09T05:30:17Z');
        insert into post (title, text, "creatorId", "createdAt") values ('Mating Game, The', 'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.', 1, '2020-08-05T11:13:32Z');
        `);
        });
    }
    down(_) {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
}
exports.MockPosts1626885016560 = MockPosts1626885016560;
//# sourceMappingURL=1626885016560-MockPosts.js.map