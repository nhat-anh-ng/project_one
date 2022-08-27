import { Component, OnInit } from '@angular/core';
import { Akademik } from '../../models/akademik.model';
@Component({
  selector: 'app-akademik-list',
  templateUrl: './akademik-list.component.html',
  styleUrls: ['./akademik-list.component.scss']
})
export class AkademikListComponent implements OnInit {
  akademikList!: Akademik[];
  constructor() { }

  ngOnInit(): void {
    this.akademikList = [
      {
        id: '1',
        name: 'Dom Studenta Nr 1 „Muchomorek”',
        address: 'ul. Żwirki i Wigury 97/99',
        phone: '(0-22) 822-19-19',
        email: 'ds1@uw.edu.pl',
        sector: 'public',
        url: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d393.17362977029205!2d20.987124566448273!3d52.21234396484965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecd9949893341%3A0xfef1c040e051e725!2sDormitory%20no.%201%20University%20of%20Warsaw!5e0!3m2!1sen!2sus!4v1661533909181!5m2!1sen!2sus" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade',
        description: 'text'
      },
      {
        id: '2',
        name: 'Dom Studenta Nr 2 „Żwirek”',
        address: 'Żwirki i Wigury 95/97',
        phone: '(0-22) 55 48 000',
        email: 'ds2@uw.edu.pl',
        sector: 'public',
        url: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9778.944569796435!2d20.9873946!3d52.2118423!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe8a5e01bf0d483ef!2sStudent%20Dorm%20Number%202%2C%20University%20of%20Warsaw!5e0!3m2!1sen!2spl!4v1661531461909!5m2!1sen!2spl" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade',
        description: 'text'
      },
      {
        id: '3',
        name: 'Dom Studenta Nr 3 „Kic”',
        address: 'ul. Kickiego 9',
        phone: '(0-22) 55 30 001',
        email: 'e.trocyszyn@uw.edu.pl',
        sector: 'public',
        url: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9770.958907978667!2d21.0796766!3d52.248111!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xae4c91d06137d32d!2sDormitory%20No.%203%20University%20of%20Warsaw!5e0!3m2!1sen!2spl!4v1661534854610!5m2!1sen!2spl" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade',
        description: 'text'
      },
      {
        id: '4',
        name: 'Dom Studenta Nr 4 „Zamenhof”',
        address: 'ul. Zamenhofa 10A',
        phone: '(0-22) 55 49 200',
        email: 'ds4@uw.edu.pl',
        sector: 'public',
        url: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9770.958907978667!2d21.0796766!3d52.248111!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xae4c91d06137d32d!2sDormitory%20No.%203%20University%20of%20Warsaw!5e0!3m2!1sen!2spl!4v1661534854610!5m2!1sen!2spl" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade',
        description: 'text'
      },
      {
        id: '5',
        name: 'Dom Studenta Nr 5 „Smyczkowa”',
        address: 'ul. Smyczkowa 5/7',
        phone: '(0-22) 55 33 000',
        email: 'ds5@uw.edu.pl',
        sector: 'public',
        url: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9770.958907978667!2d21.0796766!3d52.248111!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xae4c91d06137d32d!2sDormitory%20No.%203%20University%20of%20Warsaw!5e0!3m2!1sen!2spl!4v1661534854610!5m2!1sen!2spl" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade',
        description: 'text'
      },
      {
        id: '6',
        name: 'Dom Studenta Nr 6 „Radomska”',
        address: 'ul. Radomska 11',
        phone: '(0-22) 55 49 400',
        email: 'radomska@uw.edu.pl',
        sector: 'public',
        url: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9770.958907978667!2d21.0796766!3d52.248111!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xae4c91d06137d32d!2sDormitory%20No.%203%20University%20of%20Warsaw!5e0!3m2!1sen!2spl!4v1661534854610!5m2!1sen!2spl" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade',
        description: 'text'
      },
    ];
  }

  trackById(i: number, value: Akademik) {
    return value.id;
  }
}
