import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-manual-inputs',
  templateUrl: './manual-inputs.component.html',
  styleUrls: ['./manual-inputs.component.css'],
})
export class ManualInputsComponent implements AfterViewInit {
  @ViewChild('pointA') pointA!: ElementRef;
  @ViewChild('pointB') pointB!: ElementRef;
  @ViewChild('answer') answer!: ElementRef;

  calculateHaversine() {
    const arr1: Array<string> = this.pointA.nativeElement.value.split(',');
    const arr2: Array<string> = this.pointB.nativeElement.value.split(',');
    const toRad = function (n: number) {
      return (n * Math.PI) / 180;
    };
    // lat                // long
    // 42.11676506529524, -71.04205892965027
    // 42.11803840161953, -71.01081656007736
    // 2.58km

    let lat1 = parseFloat(arr1[0]);
    let lon1 = parseFloat(arr1[1]);
    let lat2 = parseFloat(arr2[0]);
    let lon2 = parseFloat(arr2[1]);

    let R = 6371; // km
    //has a problem with the .toRad() method below.
    let x1 = lat2 - lat1;
    let dLat = toRad(x1);
    let x2 = lon2 - lon1;
    let dLon = toRad(x2);
    let a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(toRad(lat1)) *
        Math.cos(toRad(lat2)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    let d = R * c;

    this.answer.nativeElement.innerHTML = `Distance: ${d.toFixed(2)}km`;
  }
  constructor() {}

  ngAfterViewInit() {
    // console.log(this.pointA);
  }
}
