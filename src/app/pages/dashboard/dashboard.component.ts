import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import {Chart} from 'chart.js';
import { Subject } from 'rxjs';
import {InvoiceService} from '../../service/invoice.service';
import { DataTableDirective } from 'angular-datatables';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  providers:[InvoiceService]
})
export class DashboardComponent implements OnInit, OnDestroy {
 
  canvas: any;
  ctx: any;
  @ViewChild('mychart') mychart: any;

  dtOptions: DataTables.Settings = {};
  invoiceList:any;
  dtTrigger: Subject<any> = new Subject<any>();
  
  constructor(
    private invoiceService: InvoiceService,
    private http: HttpClient
  ) { }

  ngOnInit(): void {

   
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 2
    };
    this.http.get('https://fakestoreapi.com/products')
    .subscribe(posts => {
      this.invoiceList = posts;
  });

// 
    // this.getAllInvoiceData();
    
  }

  getAllInvoiceData(){
    this.invoiceService.getAllData()
        .subscribe(
          (res: any) =>{
            // console.log(res);
            this.invoiceList = res;
            setTimeout(() => {
              $('#dataTables-example').DataTable({
                pagingType: 'full_numbers',
                processing: true,
                lengthMenu: [5, 10, 25],
                // lengthMenu: [[5, 10, 25, ], [5, 10, 25, "All"]],
                responsive: true,
                retrieve: true,
                deferLoading: 57,
                pageLength: 5,
                
              })
            }, 1)
          }
        )
  }

  ngAfterViewInit(){
    this.canvas = this.mychart.nativeElement; 
    this.ctx = this.canvas.getContext('2d');


    let myChart = new Chart(this.ctx, {
      type: "line",
      data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets: [{
          label: "Transtion ($)",
          fill: true,
          backgroundColor: "transparent",
          // borderColor: "rgba(104,151,225,1)",
          borderColor:"rgba(238,128,53,1)",
          data: [20115, 10562, 10584, 10892, 10487, 22023, 10966, 24408, 2915, 30838, 21917, 55312]
        }, {
          label: "Daily Transtion",
          fill: true,
          backgroundColor: "transparent",
          borderColor: "#0dcaf0",
          data: [10980, 10924, 20829, 28083, 30915, 30814, 29076, 20812, 20954, 20128, 50766, 38027]
          
        },
        {
          label: "Refund",
          fill: true,
          backgroundColor: "transparent",
          borderColor: "#198754",
          data: [1958, 1724, 2629, 1883, 2915, 3214, 4476, 2212, 2554, 1128, 5466, 4827]
        }
      ]
      },
      options: {
        maintainAspectRatio: false,
        legend: {
          display: false
        },
        tooltips: {
          intersect: false
        },
        hover: {
          intersect: true
        },
        plugins: {
          filler: {
            propagate: false
          }
        },
        scales: {
          xAxes: [
            
          ],
          yAxes: [{
         
          }]
        }
      }
    });


  }



  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }


}
