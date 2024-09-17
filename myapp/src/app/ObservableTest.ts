import { Observable } from "rxjs";

@exports class Test{

    createObservable():Observable<Object>{
        return new Observable((obs)=>{
            obs.next("123...");
            obs.next("456....");
            obs.next("Hello");
        })
    }

    subscribeToObservable(observable:Observable<Object>){
        observable.subscribe((data)=>{
            console.log(data);
        });    

        this.createObservable();
    }
}
