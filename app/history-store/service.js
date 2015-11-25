import Ember from 'ember';

var cache;
export default Ember.Service.extend({
  stravaProxy: Ember.inject.service(),
  getActivities(){
    return new Ember.RSVP.Promise((resolve)=> {
      if (cache) {
        resolve(cache);
      } else {
        this.get('stravaProxy').getActivities().then((activities)=>{
          var archive = this.get('getArchive')()
          var strava = $.merge([], activities);
          cache = $.merge(strava, archive);
          resolve(cache);
        });
      }
    });
  },
  getArchive() {
      /*
      distance:meters,
      duration:seconds
      includes all data from Nike+ and RunKeeper
    */
    return [
        {
            "distance": 16576.2432,
            "duration": 5429,
            "id": "/fitnessActivities/540009405",
            "source": "RunKeeper",
            "start_time": "2015-03-31T04:35:00-05:00",
            "type": "Running"
        },
        {
            "distance": 11426.3424,
            "duration": 3560,
            "id": "/fitnessActivities/538070378",
            "source": "RunKeeper",
            "start_time": "2015-03-30T11:00:00-05:00",
            "type": "Running"
        },
        {
            "distance": 8529.5232,
            "duration": 2991,
            "id": "/fitnessActivities/538069952",
            "source": "RunKeeper",
            "start_time": "2015-03-28T15:30:00-05:00",
            "type": "Running"
        },
        {
            "distance": 9334.1952,
            "duration": 3027,
            "id": "/fitnessActivities/538069276",
            "source": "RunKeeper",
            "start_time": "2015-03-27T08:29:00-05:00",
            "type": "Running"
        },
        {
            "distance": 11426.3424,
            "duration": 3374,
            "id": "/fitnessActivities/538068611",
            "source": "RunKeeper",
            "start_time": "2015-03-25T11:00:00-05:00",
            "type": "Running"
        },
        {
            "distance": 11447.8578622327,
            "duration": 3484.76,
            "id": "/fitnessActivities/533832121",
            "source": "RunKeeper",
            "start_time": "2015-03-23T11:28:10-05:00",
            "type": "Running"
        },
        {
            "distance": 14460.3956172343,
            "duration": 5044.516,
            "id": "/fitnessActivities/527805415",
            "source": "RunKeeper",
            "start_time": "2015-03-14T06:32:23-05:00",
            "type": "Running"
        },
        {
            "distance": 8449.05596923828,
            "duration": 2640,
            "id": "/fitnessActivities/527723818",
            "source": "RunKeeper",
            "start_time": "2015-03-12T11:42:58-05:00",
            "type": "Running"
        },
        {
            "distance": 8449.05596923828,
            "duration": 2520,
            "id": "/fitnessActivities/527724286",
            "source": "RunKeeper",
            "start_time": "2015-03-11T11:30:48-05:00",
            "type": "Running"
        },
        {
            "distance": 8449.05596923828,
            "duration": 2670,
            "id": "/fitnessActivities/525925911",
            "source": "RunKeeper",
            "start_time": "2015-03-05T12:06:54-06:00",
            "type": "Running"
        },
        {
            "distance": 8605.4553418832,
            "duration": 2672.858,
            "id": "/fitnessActivities/520814891",
            "source": "RunKeeper",
            "start_time": "2015-03-02T11:30:57-06:00",
            "type": "Running"
        },
        {
            "distance": 8638.49428821716,
            "duration": 2863.564,
            "id": "/fitnessActivities/519774574",
            "source": "RunKeeper",
            "start_time": "2015-02-28T10:49:00-06:00",
            "type": "Running"
        },
        {
            "distance": 15424.7255484017,
            "duration": 5235.745,
            "id": "/fitnessActivities/519745118",
            "source": "RunKeeper",
            "start_time": "2015-02-28T09:15:21-06:00",
            "type": "Running"
        },
        {
            "distance": 8527.65237306953,
            "duration": 2527.689,
            "id": "/fitnessActivities/518819635",
            "source": "RunKeeper",
            "start_time": "2015-02-26T12:17:57-06:00",
            "type": "Running"
        },
        {
            "distance": 8511.00514521726,
            "duration": 2887.842,
            "id": "/fitnessActivities/517760320",
            "source": "RunKeeper",
            "start_time": "2015-02-24T10:57:53-06:00",
            "type": "Running"
        },
        {
            "distance": 1921.32335146366,
            "duration": 913.768,
            "id": "/fitnessActivities/514638836",
            "source": "RunKeeper",
            "start_time": "2015-02-18T06:31:09-06:00",
            "type": "Running"
        },
        {
            "distance": 8341.80559393263,
            "duration": 2723.246,
            "id": "/fitnessActivities/514265472",
            "source": "RunKeeper",
            "start_time": "2015-02-17T10:55:25-06:00",
            "type": "Running"
        },
        {
            "distance": 1194.96517218037,
            "duration": 615.589,
            "id": "/fitnessActivities/513372144",
            "source": "RunKeeper",
            "start_time": "2015-02-15T14:21:41-06:00",
            "type": "Running"
        },
        {
            "distance": 15897.7875968749,
            "duration": 5231.525,
            "id": "/fitnessActivities/511614267",
            "source": "RunKeeper",
            "start_time": "2015-02-12T05:18:52-06:00",
            "type": "Running"
        },
        {
            "distance": 11193.8492736212,
            "duration": 3654.983,
            "id": "/fitnessActivities/510471310",
            "source": "RunKeeper",
            "start_time": "2015-02-10T05:10:12-06:00",
            "type": "Running"
        },
        {
            "distance": 22798.6935705894,
            "duration": 7188.623,
            "id": "/fitnessActivities/509593065",
            "source": "RunKeeper",
            "start_time": "2015-02-08T11:08:19-06:00",
            "type": "Running"
        },
        {
            "distance": 5005.05984,
            "duration": 1800,
            "id": "/fitnessActivities/509996411",
            "source": "RunKeeper",
            "start_time": "2015-02-07T09:20:00-06:00",
            "type": "Running"
        },
        {
            "distance": 8500.71133696348,
            "duration": 2305.648,
            "id": "/fitnessActivities/508393825",
            "source": "RunKeeper",
            "start_time": "2015-02-06T11:45:59-06:00",
            "type": "Running"
        },
        {
            "distance": 8449.05596923828,
            "duration": 2337,
            "id": "/fitnessActivities/506947063",
            "source": "RunKeeper",
            "start_time": "2015-02-03T13:58:22-06:00",
            "type": "Running"
        },
        {
            "distance": 8449.05596923828,
            "duration": 3004,
            "id": "/fitnessActivities/504895245",
            "source": "RunKeeper",
            "start_time": "2015-01-29T11:00:03-06:00",
            "type": "Running"
        },
        {
            "distance": 8543.12497442911,
            "duration": 2730.255,
            "id": "/fitnessActivities/503272221",
            "source": "RunKeeper",
            "start_time": "2015-01-27T11:26:19-06:00",
            "type": "Running"
        },
        {
            "distance": 8449.05596923828,
            "duration": 3076,
            "id": "/fitnessActivities/504894673",
            "source": "RunKeeper",
            "start_time": "2015-01-26T11:00:18-06:00",
            "type": "Running"
        },
        {
            "distance": 16656.5742166464,
            "duration": 5573.739,
            "id": "/fitnessActivities/501622003",
            "source": "RunKeeper",
            "start_time": "2015-01-24T13:27:55-06:00",
            "type": "Running"
        },
        {
            "distance": 4324.3324277707,
            "duration": 1494.735,
            "id": "/fitnessActivities/501582487",
            "source": "RunKeeper",
            "start_time": "2015-01-24T13:00:12-06:00",
            "type": "Running"
        },
        {
            "distance": 12918.8111867871,
            "duration": 4378.78,
            "id": "/fitnessActivities/499404107",
            "source": "RunKeeper",
            "start_time": "2015-01-20T11:11:44-06:00",
            "type": "Running"
        },
        {
            "distance": 8520.77259995437,
            "duration": 2716.647,
            "id": "/fitnessActivities/496558521",
            "source": "RunKeeper",
            "start_time": "2015-01-15T12:00:31-06:00",
            "type": "Running"
        },
        {
            "distance": 8569.23214024927,
            "duration": 2873.754,
            "id": "/fitnessActivities/495033435",
            "source": "RunKeeper",
            "start_time": "2015-01-12T11:51:48-06:00",
            "type": "Running"
        },
        {
            "distance": 4256.21797265905,
            "duration": 1510.476,
            "id": "/fitnessActivities/494974183",
            "source": "RunKeeper",
            "start_time": "2015-01-12T10:11:14-06:00",
            "type": "Running"
        },
        {
            "distance": 8560.06386417947,
            "duration": 2774.774,
            "id": "/fitnessActivities/492066231",
            "source": "RunKeeper",
            "start_time": "2015-01-06T11:02:50-06:00",
            "type": "Running"
        },
        {
            "distance": 8493.80283965987,
            "duration": 2640.533,
            "id": "/fitnessActivities/491521761",
            "source": "RunKeeper",
            "start_time": "2015-01-05T11:44:37-06:00",
            "type": "Running"
        },
        {
            "distance": 8471.25112983677,
            "duration": 2601.227,
            "id": "/fitnessActivities/485576410",
            "source": "RunKeeper",
            "start_time": "2014-12-22T10:56:06-06:00",
            "type": "Running"
        },
        {
            "distance": 8707.87332311829,
            "duration": 2514.237,
            "id": "/fitnessActivities/484165416",
            "source": "RunKeeper",
            "start_time": "2014-12-18T11:05:32-06:00",
            "type": "Running"
        },
        {
            "distance": 8532.13365178333,
            "duration": 2664.673,
            "id": "/fitnessActivities/483463254",
            "source": "RunKeeper",
            "start_time": "2014-12-16T11:07:00-06:00",
            "type": "Running"
        },
        {
            "distance": 8444.30145162713,
            "duration": 2862.251,
            "id": "/fitnessActivities/481554256",
            "source": "RunKeeper",
            "start_time": "2014-12-11T11:15:46-06:00",
            "type": "Running"
        },
        {
            "distance": 21292.275691087,
            "duration": 6341.834,
            "id": "/fitnessActivities/480819018",
            "source": "RunKeeper",
            "start_time": "2014-12-09T11:18:53-06:00",
            "type": "Running"
        },
        {
            "distance": 8530.40730902701,
            "duration": 2499.293,
            "id": "/fitnessActivities/479461736",
            "source": "RunKeeper",
            "start_time": "2014-12-06T08:21:53-06:00",
            "type": "Running"
        },
        {
            "distance": 16609.5881469001,
            "duration": 5166.072,
            "id": "/fitnessActivities/478821113",
            "source": "RunKeeper",
            "start_time": "2014-12-04T13:52:07-06:00",
            "type": "Running"
        },
        {
            "distance": 8491.4338408829,
            "duration": 2797.26,
            "id": "/fitnessActivities/478333687",
            "source": "RunKeeper",
            "start_time": "2014-12-03T10:36:30-06:00",
            "type": "Running"
        },
        {
            "distance": 13502.1862877223,
            "duration": 4353.819,
            "id": "/fitnessActivities/477802352",
            "source": "RunKeeper",
            "start_time": "2014-12-02T05:07:20-06:00",
            "type": "Running"
        },
        {
            "duration": 1800,
            "id": "/fitnessActivities/477444134",
            "source": "RunKeeper",
            "start_time": "2014-11-29T10:34:49-06:00",
            "type": "Running"
        },
        {
            "duration": 3463,
            "id": "/fitnessActivities/477443913",
            "source": "RunKeeper",
            "start_time": "2014-11-27T09:33:55-06:00",
            "type": "Running"
        },
        {
            "distance": 16613.5683735854,
            "duration": 4932.892,
            "id": "/fitnessActivities/474430649",
            "source": "RunKeeper",
            "start_time": "2014-11-24T11:02:19-06:00",
            "type": "Running"
        },
        {
            "distance": 8519.37569774583,
            "duration": 2661.467,
            "id": "/fitnessActivities/473444857",
            "source": "RunKeeper",
            "start_time": "2014-11-22T10:30:07-06:00",
            "type": "Running"
        },
        {
            "distance": 10182.5940321322,
            "duration": 3014.477,
            "id": "/fitnessActivities/472577618",
            "source": "RunKeeper",
            "start_time": "2014-11-20T11:06:15-06:00",
            "type": "Running"
        },
        {
            "distance": 10686.6740572724,
            "duration": 3343.846,
            "id": "/fitnessActivities/471656800",
            "source": "RunKeeper",
            "start_time": "2014-11-18T10:57:25-06:00",
            "type": "Running"
        },
        {
            "distance": 14457.2367723652,
            "duration": 4731.764,
            "id": "/fitnessActivities/470246135",
            "source": "RunKeeper",
            "start_time": "2014-11-15T05:21:38-06:00",
            "type": "Running"
        },
        {
            "distance": 11164.8601053146,
            "duration": 3475.349,
            "id": "/fitnessActivities/468792677",
            "source": "RunKeeper",
            "start_time": "2014-11-12T05:16:37-06:00",
            "type": "Running"
        },
        {
            "distance": 8264.60160425577,
            "duration": 2739.445,
            "id": "/fitnessActivities/468240142",
            "source": "RunKeeper",
            "start_time": "2014-11-11T05:27:04-06:00",
            "type": "Running"
        },
        {
            "distance": 8384.6823013916,
            "duration": 2810,
            "id": "/fitnessActivities/467740616",
            "source": "RunKeeper",
            "start_time": "2014-11-07T11:31:16-06:00",
            "type": "Running"
        },
        {
            "distance": 8384.6823013916,
            "duration": 2742,
            "id": "/fitnessActivities/467740238",
            "source": "RunKeeper",
            "start_time": "2014-11-05T11:30:11-06:00",
            "type": "Running"
        },
        {
            "distance": 8256.72601486157,
            "duration": 2675.356,
            "id": "/fitnessActivities/464645029",
            "source": "RunKeeper",
            "start_time": "2014-11-04T05:18:00-06:00",
            "type": "Running"
        },
        {
            "distance": 21082.4064,
            "duration": 7266,
            "id": "/fitnessActivities/464903304",
            "source": "RunKeeper",
            "start_time": "2014-11-02T11:00:00-06:00",
            "type": "Running"
        },
        {
            "distance": 90123.264,
            "duration": 10461,
            "id": "/fitnessActivities/464902865",
            "source": "RunKeeper",
            "start_time": "2014-11-02T08:00:00-06:00",
            "type": "Cycling"
        },
        {
            "distance": 1931.2128,
            "duration": 2452,
            "id": "/fitnessActivities/464901761",
            "source": "RunKeeper",
            "start_time": "2014-11-02T07:20:00-06:00",
            "type": "Swimming"
        },
        {
            "distance": 974.051882011986,
            "duration": 1553.61077064276,
            "id": "/fitnessActivities/463226082",
            "source": "RunKeeper",
            "start_time": "2014-11-01T12:42:56-05:00",
            "type": "Walking"
        },
        {
            "distance": 2722.19476201483,
            "duration": 3026.45571839809,
            "id": "/fitnessActivities/463226080",
            "source": "RunKeeper",
            "start_time": "2014-10-31T18:55:03-05:00",
            "type": "Walking"
        },
        {
            "distance": 996.774709741659,
            "duration": 1282.04088199139,
            "id": "/fitnessActivities/463226076",
            "source": "RunKeeper",
            "start_time": "2014-10-30T14:26:18-05:00",
            "type": "Walking"
        },
        {
            "distance": 22988.1847909799,
            "duration": 2598.26290350001,
            "id": "/fitnessActivities/462186603",
            "source": "RunKeeper",
            "start_time": "2014-10-30T10:56:41-05:00",
            "type": "Cycling"
        },
        {
            "distance": 7067.64137901861,
            "duration": 2157.2660145,
            "id": "/fitnessActivities/462015495",
            "source": "RunKeeper",
            "start_time": "2014-10-30T05:11:26-05:00",
            "type": "Running"
        },
        {
            "distance": 1320.953718685,
            "duration": 2088.52696037292,
            "id": "/fitnessActivities/461998287",
            "source": "RunKeeper",
            "start_time": "2014-10-29T20:56:14-05:00",
            "type": "Walking"
        },
        {
            "distance": 1311.10716000214,
            "duration": 1515.60189455748,
            "id": "/fitnessActivities/461998283",
            "source": "RunKeeper",
            "start_time": "2014-10-29T17:58:35-05:00",
            "type": "Walking"
        },
        {
            "distance": 976.324164784953,
            "duration": 1167.70744013786,
            "id": "/fitnessActivities/461998280",
            "source": "RunKeeper",
            "start_time": "2014-10-29T14:31:37-05:00",
            "type": "Walking"
        },
        {
            "duration": 1200,
            "id": "/fitnessActivities/461998291",
            "source": "RunKeeper",
            "start_time": "2014-10-29T11:30:24-05:00",
            "type": "Swimming"
        },
        {
            "distance": 1729.20719022812,
            "duration": 2482.30696511269,
            "id": "/fitnessActivities/461998276",
            "source": "RunKeeper",
            "start_time": "2014-10-29T07:20:16-05:00",
            "type": "Walking"
        },
        {
            "distance": 8512.90802058803,
            "duration": 2793.778403,
            "id": "/fitnessActivities/460430172",
            "source": "RunKeeper",
            "start_time": "2014-10-27T11:34:15-05:00",
            "type": "Running"
        },
        {
            "distance": 997.532137332648,
            "duration": 921.83157491684,
            "id": "/fitnessActivities/460399602",
            "source": "RunKeeper",
            "start_time": "2014-10-27T10:06:42-05:00",
            "type": "Walking"
        },
        {
            "distance": 1181.587041943,
            "duration": 1524.77502524853,
            "id": "/fitnessActivities/460399597",
            "source": "RunKeeper",
            "start_time": "2014-10-27T07:32:56-05:00",
            "type": "Walking"
        },
        {
            "distance": 1067.21547570365,
            "duration": 1209.30674600601,
            "id": "/fitnessActivities/460256133",
            "source": "RunKeeper",
            "start_time": "2014-10-24T07:35:41-05:00",
            "type": "Walking"
        },
        {
            "distance": 8449.056,
            "duration": 2564,
            "id": "/fitnessActivities/457743364",
            "source": "RunKeeper",
            "start_time": "2014-10-22T12:37:53-05:00",
            "type": "Running"
        },
        {
            "distance": 1651.94957594723,
            "duration": 2113.86714321375,
            "id": "/fitnessActivities/457743361",
            "source": "RunKeeper",
            "start_time": "2014-10-22T08:40:21-05:00",
            "type": "Walking"
        },
        {
            "distance": 936.93793005352,
            "duration": 893.644869327545,
            "id": "/fitnessActivities/457743359",
            "source": "RunKeeper",
            "start_time": "2014-10-20T14:02:54-05:00",
            "type": "Walking"
        },
        {
            "distance": 908.155681595934,
            "duration": 785.479490995407,
            "id": "/fitnessActivities/457743357",
            "source": "RunKeeper",
            "start_time": "2014-10-20T10:00:08-05:00",
            "type": "Walking"
        },
        {
            "distance": 2001.12369539321,
            "duration": 2749.83904898167,
            "id": "/fitnessActivities/456237034",
            "source": "RunKeeper",
            "start_time": "2014-10-19T17:31:47-05:00",
            "type": "Walking"
        },
        {
            "distance": 4253.35000114602,
            "duration": 1348.80643329167,
            "id": "/fitnessActivities/456018748",
            "source": "RunKeeper",
            "start_time": "2014-10-19T11:24:40-05:00",
            "type": "Running"
        },
        {
            "distance": 94036.4861768667,
            "duration": 10886.958559875,
            "id": "/fitnessActivities/455999359",
            "source": "RunKeeper",
            "start_time": "2014-10-19T08:17:30-05:00",
            "type": "Cycling"
        },
        {
            "distance": 16093.44,
            "duration": 5400,
            "id": "/fitnessActivities/455855700",
            "source": "RunKeeper",
            "start_time": "2014-10-18T10:07:41-05:00",
            "type": "Running"
        },
        {
            "distance": 1609.344,
            "duration": 1920,
            "id": "/fitnessActivities/454903725",
            "source": "RunKeeper",
            "start_time": "2014-10-17T15:07:33-05:00",
            "type": "Swimming"
        },
        {
            "distance": 1375.48850523621,
            "duration": 1270.84044587612,
            "id": "/fitnessActivities/454903616",
            "source": "RunKeeper",
            "start_time": "2014-10-17T08:40:53-05:00",
            "type": "Walking"
        },
        {
            "distance": 5092.18569421974,
            "duration": 6754.33290088177,
            "id": "/fitnessActivities/454903611",
            "source": "RunKeeper",
            "start_time": "2014-10-16T16:30:40-05:00",
            "type": "Walking"
        },
        {
            "distance": 1725.42005227318,
            "duration": 1212.61635971069,
            "id": "/fitnessActivities/454903609",
            "source": "RunKeeper",
            "start_time": "2014-10-16T11:40:26-05:00",
            "type": "Walking"
        },
        {
            "distance": 973.294454420997,
            "duration": 1468.92966336012,
            "id": "/fitnessActivities/454903607",
            "source": "RunKeeper",
            "start_time": "2014-10-16T10:01:03-05:00",
            "type": "Walking"
        },
        {
            "distance": 1236.12182849421,
            "duration": 1287.91546112299,
            "id": "/fitnessActivities/454903604",
            "source": "RunKeeper",
            "start_time": "2014-10-16T07:34:59-05:00",
            "type": "Walking"
        },
        {
            "distance": 12466.4683671479,
            "duration": 3816.33497808335,
            "id": "/fitnessActivities/453932374",
            "source": "RunKeeper",
            "start_time": "2014-10-15T17:37:16-05:00",
            "type": "Running"
        },
        {
            "distance": 5881.3450005411,
            "duration": 1856.91440579167,
            "id": "/fitnessActivities/453174287",
            "source": "RunKeeper",
            "start_time": "2014-10-14T11:55:34-05:00",
            "type": "Running"
        },
        {
            "distance": 14391.0420041292,
            "duration": 1718.31828162499,
            "id": "/fitnessActivities/453149057",
            "source": "RunKeeper",
            "start_time": "2014-10-14T11:23:41-05:00",
            "type": "Cycling"
        },
        {
            "distance": 2735.82845865264,
            "duration": 3766.41245532036,
            "id": "/fitnessActivities/453120576",
            "source": "RunKeeper",
            "start_time": "2014-10-13T18:19:18-05:00",
            "type": "Walking"
        },
        {
            "distance": 1281.56748395356,
            "duration": 1235.12392365933,
            "id": "/fitnessActivities/453120571",
            "source": "RunKeeper",
            "start_time": "2014-10-13T14:56:31-05:00",
            "type": "Walking"
        },
        {
            "distance": 806.660384403394,
            "duration": 911.489702343941,
            "id": "/fitnessActivities/453120568",
            "source": "RunKeeper",
            "start_time": "2014-10-13T12:46:48-05:00",
            "type": "Walking"
        },
        {
            "distance": 1595.89993421404,
            "duration": 2552.83730047941,
            "id": "/fitnessActivities/452184483",
            "source": "RunKeeper",
            "start_time": "2014-10-12T16:00:13-05:00",
            "type": "Walking"
        },
        {
            "distance": 20271.0257944038,
            "duration": 6550.70809316667,
            "id": "/fitnessActivities/452097795",
            "source": "RunKeeper",
            "start_time": "2014-10-12T11:29:43-05:00",
            "type": "Running"
        },
        {
            "distance": 632.452038475901,
            "duration": 756.19573289156,
            "id": "/fitnessActivities/452026811",
            "source": "RunKeeper",
            "start_time": "2014-10-12T06:11:45-05:00",
            "type": "Walking"
        },
        {
            "distance": 9616.96120463518,
            "duration": 2796.34311958334,
            "id": "/fitnessActivities/450695684",
            "source": "RunKeeper",
            "start_time": "2014-10-10T05:52:23-05:00",
            "type": "Running"
        },
        {
            "distance": 22848.0351979453,
            "duration": 2682.98005729167,
            "id": "/fitnessActivities/450299871",
            "source": "RunKeeper",
            "start_time": "2014-10-09T11:18:54-05:00",
            "type": "Cycling"
        },
        {
            "distance": 2253.08156163025,
            "duration": 2631,
            "id": "/fitnessActivities/450143120",
            "source": "RunKeeper",
            "start_time": "2014-10-08T18:15:49-05:00",
            "type": "Swimming"
        },
        {
            "distance": 30577.536,
            "duration": 3600,
            "id": "/fitnessActivities/449187140",
            "source": "RunKeeper",
            "start_time": "2014-10-07T15:24:07-05:00",
            "type": "Cycling"
        },
        {
            "distance": 6180.60914247108,
            "duration": 4874.59613978863,
            "id": "/fitnessActivities/449186997",
            "source": "RunKeeper",
            "start_time": "2014-10-07T10:21:23-05:00",
            "type": "Walking"
        },
        {
            "distance": 19732.7279369636,
            "duration": 6614.596312625,
            "id": "/fitnessActivities/448701757",
            "source": "RunKeeper",
            "start_time": "2014-10-06T17:57:10-05:00",
            "type": "Running"
        },
        {
            "distance": 968.749888875062,
            "duration": 1564.44874602556,
            "id": "/fitnessActivities/448642124",
            "source": "RunKeeper",
            "start_time": "2014-10-06T07:27:44-05:00",
            "type": "Walking"
        },
        {
            "distance": 1288.38433227246,
            "duration": 2030.64456999302,
            "id": "/fitnessActivities/448642120",
            "source": "RunKeeper",
            "start_time": "2014-10-05T18:15:56-05:00",
            "type": "Walking"
        },
        {
            "distance": 924.061661006705,
            "duration": 1239.03526753187,
            "id": "/fitnessActivities/448642118",
            "source": "RunKeeper",
            "start_time": "2014-10-04T14:46:44-05:00",
            "type": "Walking"
        },
        {
            "distance": 1339.88940845972,
            "duration": 2226.96001178026,
            "id": "/fitnessActivities/448642113",
            "source": "RunKeeper",
            "start_time": "2014-10-04T11:14:00-05:00",
            "type": "Walking"
        },
        {
            "distance": 67024.7942686154,
            "duration": 7947.293,
            "id": "/fitnessActivities/447171909",
            "source": "RunKeeper",
            "start_time": "2014-10-04T06:53:49-05:00",
            "type": "Cycling"
        },
        {
            "distance": 537.016162011274,
            "duration": 761.589093804359,
            "id": "/fitnessActivities/447072165",
            "source": "RunKeeper",
            "start_time": "2014-10-03T20:53:00-05:00",
            "type": "Walking"
        },
        {
            "distance": 1609.344,
            "duration": 2100,
            "id": "/fitnessActivities/446727671",
            "source": "RunKeeper",
            "start_time": "2014-10-03T12:14:07-05:00",
            "type": "Swimming"
        },
        {
            "distance": 8449.056,
            "duration": 2580,
            "id": "/fitnessActivities/446684270",
            "source": "RunKeeper",
            "start_time": "2014-10-02T17:05:43-05:00",
            "type": "Running"
        },
        {
            "distance": 27476.9606012843,
            "duration": 3605.681,
            "id": "/fitnessActivities/446172560",
            "source": "RunKeeper",
            "start_time": "2014-10-02T11:42:23-05:00",
            "type": "Cycling"
        },
        {
            "distance": 1467.13724374589,
            "duration": 1364.78014338017,
            "id": "/fitnessActivities/446125615",
            "source": "RunKeeper",
            "start_time": "2014-10-01T13:52:22-05:00",
            "type": "Walking"
        },
        {
            "distance": 8803.86188426509,
            "duration": 2690.359,
            "id": "/fitnessActivities/445307480",
            "source": "RunKeeper",
            "start_time": "2014-10-01T05:18:53-05:00",
            "type": "Running"
        },
        {
            "distance": 22965.1195945889,
            "duration": 2654.934,
            "id": "/fitnessActivities/444843967",
            "source": "RunKeeper",
            "start_time": "2014-09-30T11:11:01-05:00",
            "type": "Cycling"
        },
        {
            "distance": 2825.20491438935,
            "duration": 1614.92053884268,
            "id": "/fitnessActivities/444805695",
            "source": "RunKeeper",
            "start_time": "2014-09-29T21:05:19-05:00",
            "type": "Walking"
        },
        {
            "distance": 2555.56069199723,
            "duration": 2111.82619380951,
            "id": "/fitnessActivities/444805687",
            "source": "RunKeeper",
            "start_time": "2014-09-29T11:15:22-05:00",
            "type": "Walking"
        },
        {
            "distance": 1077.81946197749,
            "duration": 958.407745420933,
            "id": "/fitnessActivities/444805672",
            "source": "RunKeeper",
            "start_time": "2014-09-29T07:42:48-05:00",
            "type": "Walking"
        },
        {
            "distance": 6211.66367370163,
            "duration": 9300.68842941523,
            "id": "/fitnessActivities/444805664",
            "source": "RunKeeper",
            "start_time": "2014-09-28T12:01:53-05:00",
            "type": "Walking"
        },
        {
            "distance": 11220.3599085532,
            "duration": 4250.9,
            "id": "/fitnessActivities/443315083",
            "source": "RunKeeper",
            "start_time": "2014-09-28T05:45:23-05:00",
            "type": "Running"
        },
        {
            "distance": 54913.6582055816,
            "duration": 6439,
            "id": "/fitnessActivities/442830551",
            "source": "RunKeeper",
            "start_time": "2014-09-27T09:04:41-05:00",
            "type": "Cycling"
        },
        {
            "distance": 1609.344,
            "duration": 1920,
            "id": "/fitnessActivities/442861138",
            "source": "RunKeeper",
            "start_time": "2014-09-26T11:36:17-05:00",
            "type": "Swimming"
        },
        {
            "distance": 1686.03381754174,
            "duration": 1155.24775749445,
            "id": "/fitnessActivities/442732865",
            "source": "RunKeeper",
            "start_time": "2014-09-26T09:47:37-05:00",
            "type": "Walking"
        },
        {
            "distance": 8449.056,
            "duration": 2821,
            "id": "/fitnessActivities/441767102",
            "source": "RunKeeper",
            "start_time": "2014-09-25T11:20:31-05:00",
            "type": "Running"
        },
        {
            "distance": 1533.03344416194,
            "duration": 2160.40142953396,
            "id": "/fitnessActivities/441766540",
            "source": "RunKeeper",
            "start_time": "2014-09-23T19:51:49-05:00",
            "type": "Walking"
        },
        {
            "distance": 1533.79087175293,
            "duration": 1884.96571308374,
            "id": "/fitnessActivities/441766535",
            "source": "RunKeeper",
            "start_time": "2014-09-23T10:35:11-05:00",
            "type": "Walking"
        },
        {
            "distance": 2091.25757872091,
            "duration": 3380.67567574978,
            "id": "/fitnessActivities/441766530",
            "source": "RunKeeper",
            "start_time": "2014-09-23T08:09:00-05:00",
            "type": "Walking"
        },
        {
            "distance": 819.536653450209,
            "duration": 889.403864324093,
            "id": "/fitnessActivities/441766521",
            "source": "RunKeeper",
            "start_time": "2014-09-23T07:26:25-05:00",
            "type": "Walking"
        },
        {
            "distance": 1174.7701936241,
            "duration": 1876.30906909704,
            "id": "/fitnessActivities/441766517",
            "source": "RunKeeper",
            "start_time": "2014-09-22T14:00:32-05:00",
            "type": "Walking"
        },
        {
            "distance": 810.44752235834,
            "duration": 1306.08111715317,
            "id": "/fitnessActivities/441766514",
            "source": "RunKeeper",
            "start_time": "2014-09-22T12:09:07-05:00",
            "type": "Walking"
        },
        {
            "distance": 821.808936223176,
            "duration": 1132.41159003973,
            "id": "/fitnessActivities/441766511",
            "source": "RunKeeper",
            "start_time": "2014-09-22T10:24:02-05:00",
            "type": "Walking"
        },
        {
            "distance": 1152.04736589442,
            "duration": 1589.52621787787,
            "id": "/fitnessActivities/441766508",
            "source": "RunKeeper",
            "start_time": "2014-09-22T08:41:10-05:00",
            "type": "Walking"
        },
        {
            "distance": 846.804046725817,
            "duration": 1272.86514163017,
            "id": "/fitnessActivities/441766473",
            "source": "RunKeeper",
            "start_time": "2014-09-22T07:45:40-05:00",
            "type": "Walking"
        },
        {
            "distance": 2156.39635154597,
            "duration": 2877.18942677975,
            "id": "/fitnessActivities/441766470",
            "source": "RunKeeper",
            "start_time": "2014-09-21T14:21:27-05:00",
            "type": "Walking"
        },
        {
            "distance": 4166.60917803105,
            "duration": 5778.59837043285,
            "id": "/fitnessActivities/441766467",
            "source": "RunKeeper",
            "start_time": "2014-09-20T22:56:39-05:00",
            "type": "Walking"
        },
        {
            "distance": 2325.30270433655,
            "duration": 2377.54215526581,
            "id": "/fitnessActivities/441766462",
            "source": "RunKeeper",
            "start_time": "2014-09-20T22:15:01-05:00",
            "type": "Walking"
        },
        {
            "distance": 1112.66113116299,
            "duration": 1372.36120963097,
            "id": "/fitnessActivities/441766460",
            "source": "RunKeeper",
            "start_time": "2014-09-20T15:12:18-05:00",
            "type": "Walking"
        },
        {
            "distance": 1349.73596714258,
            "duration": 1858.10548222065,
            "id": "/fitnessActivities/441766455",
            "source": "RunKeeper",
            "start_time": "2014-09-20T14:05:09-05:00",
            "type": "Walking"
        },
        {
            "distance": 808.932667176362,
            "duration": 1216.50612801313,
            "id": "/fitnessActivities/441766452",
            "source": "RunKeeper",
            "start_time": "2014-09-20T12:51:38-05:00",
            "type": "Walking"
        },
        {
            "distance": 1345.94882918764,
            "duration": 2059.96768540144,
            "id": "/fitnessActivities/441766448",
            "source": "RunKeeper",
            "start_time": "2014-09-20T10:31:42-05:00",
            "type": "Walking"
        },
        {
            "distance": 693.046245755029,
            "duration": 890.083763301373,
            "id": "/fitnessActivities/441766444",
            "source": "RunKeeper",
            "start_time": "2014-09-19T17:27:01-05:00",
            "type": "Walking"
        },
        {
            "distance": 977.081592375942,
            "duration": 1575.5376546979,
            "id": "/fitnessActivities/441766443",
            "source": "RunKeeper",
            "start_time": "2014-09-19T15:31:17-05:00",
            "type": "Walking"
        },
        {
            "distance": 490.055651369949,
            "duration": 789.745815992355,
            "id": "/fitnessActivities/441766438",
            "source": "RunKeeper",
            "start_time": "2014-09-19T15:01:51-05:00",
            "type": "Walking"
        },
        {
            "distance": 2020.81681275893,
            "duration": 2125.01434630156,
            "id": "/fitnessActivities/441766434",
            "source": "RunKeeper",
            "start_time": "2014-09-19T14:04:11-05:00",
            "type": "Walking"
        },
        {
            "distance": 3010.01724659069,
            "duration": 3478.12321817875,
            "id": "/fitnessActivities/441766432",
            "source": "RunKeeper",
            "start_time": "2014-09-19T10:17:41-05:00",
            "type": "Walking"
        },
        {
            "distance": 1080.84917234145,
            "duration": 1394.09933447838,
            "id": "/fitnessActivities/441766426",
            "source": "RunKeeper",
            "start_time": "2014-09-18T21:01:43-05:00",
            "type": "Walking"
        },
        {
            "distance": 693.046245755029,
            "duration": 820.470294713974,
            "id": "/fitnessActivities/441766424",
            "source": "RunKeeper",
            "start_time": "2014-09-18T19:05:00-05:00",
            "type": "Walking"
        },
        {
            "distance": 0,
            "duration": 3086,
            "id": "/fitnessActivities/436063603",
            "source": "RunKeeper",
            "start_time": "2014-09-16T19:10:30-05:00",
            "type": "Cycling"
        },
        {
            "distance": 1317.92400832104,
            "duration": 1994.45085960627,
            "id": "/fitnessActivities/435359389",
            "source": "RunKeeper",
            "start_time": "2014-09-15T07:26:00-05:00",
            "type": "Walking"
        },
        {
            "distance": 1995.5865753479,
            "duration": 2419,
            "id": "/fitnessActivities/434314776",
            "source": "RunKeeper",
            "start_time": "2014-09-14T09:39:20-05:00",
            "type": "Swimming"
        },
        {
            "distance": 19397.8392966859,
            "duration": 6377.899,
            "id": "/fitnessActivities/434243858",
            "source": "RunKeeper",
            "start_time": "2014-09-14T06:29:17-05:00",
            "type": "Running"
        },
        {
            "distance": 3621.024,
            "duration": 1200,
            "id": "/fitnessActivities/433716814",
            "source": "RunKeeper",
            "start_time": "2014-09-13T11:00:43-05:00",
            "type": "Running"
        },
        {
            "distance": 75404.5292526683,
            "duration": 8648.095,
            "id": "/fitnessActivities/433647341",
            "source": "RunKeeper",
            "start_time": "2014-09-13T07:08:44-05:00",
            "type": "Cycling"
        },
        {
            "distance": 1287.47521918488,
            "duration": 1518,
            "id": "/fitnessActivities/433152201",
            "source": "RunKeeper",
            "start_time": "2014-09-12T12:35:37-05:00",
            "type": "Swimming"
        },
        {
            "distance": 7240.19654503069,
            "duration": 2272.227,
            "id": "/fitnessActivities/432952822",
            "source": "RunKeeper",
            "start_time": "2014-09-12T05:50:42-05:00",
            "type": "Running"
        },
        {
            "distance": 846.046619134828,
            "duration": 943.215340316296,
            "id": "/fitnessActivities/432795130",
            "source": "RunKeeper",
            "start_time": "2014-09-11T18:43:32-05:00",
            "type": "Walking"
        },
        {
            "distance": 28841.5426213326,
            "duration": 3306.315,
            "id": "/fitnessActivities/432517536",
            "source": "RunKeeper",
            "start_time": "2014-09-11T11:06:58-05:00",
            "type": "Cycling"
        },
        {
            "distance": 8469.72463672264,
            "duration": 2551.166,
            "id": "/fitnessActivities/431807322",
            "source": "RunKeeper",
            "start_time": "2014-09-10T10:29:58-05:00",
            "type": "Running"
        },
        {
            "distance": 1287.47521918488,
            "duration": 1632,
            "id": "/fitnessActivities/431615399",
            "source": "RunKeeper",
            "start_time": "2014-09-10T05:58:18-05:00",
            "type": "Swimming"
        },
        {
            "distance": 0,
            "duration": 1850,
            "id": "/fitnessActivities/431615924",
            "source": "RunKeeper",
            "start_time": "2014-09-09T05:59:03-05:00",
            "type": "Spinning"
        },
        {
            "distance": 3630.35044361077,
            "duration": 3150.43209916353,
            "id": "/fitnessActivities/430931151",
            "source": "RunKeeper",
            "start_time": "2014-09-08T10:56:36-05:00",
            "type": "Walking"
        },
        {
            "distance": 1609.344,
            "duration": 2045,
            "id": "/fitnessActivities/429763336",
            "source": "RunKeeper",
            "start_time": "2014-09-07T12:21:42-05:00",
            "type": "Swimming"
        },
        {
            "distance": 14652.1092781815,
            "duration": 4606.261,
            "id": "/fitnessActivities/429465552",
            "source": "RunKeeper",
            "start_time": "2014-09-07T05:02:51-05:00",
            "type": "Running"
        },
        {
            "distance": 63585.3512957984,
            "duration": 7333.301,
            "id": "/fitnessActivities/428901904",
            "source": "RunKeeper",
            "start_time": "2014-09-06T06:46:52-05:00",
            "type": "Cycling"
        },
        {
            "distance": 8416.8691506958,
            "duration": 2567,
            "id": "/fitnessActivities/428399773",
            "source": "RunKeeper",
            "start_time": "2014-09-05T11:23:29-05:00",
            "type": "Running"
        },
        {
            "distance": 804.672,
            "duration": 1800,
            "id": "/fitnessActivities/428229477",
            "source": "RunKeeper",
            "start_time": "2014-09-05T06:18:55-05:00",
            "type": "Swimming"
        },
        {
            "distance": 1305.80516686521,
            "duration": 965.332001030445,
            "id": "/fitnessActivities/428229472",
            "source": "RunKeeper",
            "start_time": "2014-09-04T13:06:38-05:00",
            "type": "Walking"
        },
        {
            "distance": 22902.1889478238,
            "duration": 2657.006,
            "id": "/fitnessActivities/427776859",
            "source": "RunKeeper",
            "start_time": "2014-09-04T10:23:15-05:00",
            "type": "Cycling"
        },
        {
            "distance": 1677.70211404086,
            "duration": 1597.40023452044,
            "id": "/fitnessActivities/427716148",
            "source": "RunKeeper",
            "start_time": "2014-09-03T20:44:00-05:00",
            "type": "Walking"
        },
        {
            "distance": 7277.65247178889,
            "duration": 2256.209,
            "id": "/fitnessActivities/426861984",
            "source": "RunKeeper",
            "start_time": "2014-09-03T06:00:01-05:00",
            "type": "Running"
        },
        {
            "distance": 1207.008,
            "duration": 1705,
            "id": "/fitnessActivities/427101967",
            "source": "RunKeeper",
            "start_time": "2014-09-03T05:10:58-05:00",
            "type": "Swimming"
        },
        {
            "distance": 23004.8561461292,
            "duration": 2709.254,
            "id": "/fitnessActivities/426334843",
            "source": "RunKeeper",
            "start_time": "2014-09-02T11:07:06-05:00",
            "type": "Cycling"
        },
        {
            "distance": 1609.344,
            "duration": 1912,
            "id": "/fitnessActivities/425733657",
            "source": "RunKeeper",
            "start_time": "2014-09-01T13:35:11-05:00",
            "type": "Swimming"
        },
        {
            "distance": 11587.276493042,
            "duration": 3886,
            "id": "/fitnessActivities/425517803",
            "source": "RunKeeper",
            "start_time": "2014-09-01T09:38:55-05:00",
            "type": "Running"
        },
        {
            "distance": 705.165087210854,
            "duration": 938.200202763081,
            "id": "/fitnessActivities/425103010",
            "source": "RunKeeper",
            "start_time": "2014-08-29T08:51:20-05:00",
            "type": "Walking"
        },
        {
            "distance": 677.897693935247,
            "duration": 891.585095465183,
            "id": "/fitnessActivities/425103006",
            "source": "RunKeeper",
            "start_time": "2014-08-28T19:08:15-05:00",
            "type": "Walking"
        },
        {
            "distance": 1942.04434329606,
            "duration": 3242.80557692051,
            "id": "/fitnessActivities/425103000",
            "source": "RunKeeper",
            "start_time": "2014-08-27T13:39:07-05:00",
            "type": "Walking"
        },
        {
            "distance": 4628.02774767705,
            "duration": 1754.625,
            "id": "/fitnessActivities/422340623",
            "source": "RunKeeper",
            "start_time": "2014-08-27T06:56:38-05:00",
            "type": "Running"
        },
        {
            "distance": 1931.2128767395,
            "duration": 2570,
            "id": "/fitnessActivities/421188743",
            "source": "RunKeeper",
            "start_time": "2014-08-25T14:58:28-05:00",
            "type": "Swimming"
        },
        {
            "distance": 6213.9359564746,
            "duration": 8028.8497171402,
            "id": "/fitnessActivities/421188478",
            "source": "RunKeeper",
            "start_time": "2014-08-24T13:49:02-05:00",
            "type": "Walking"
        },
        {
            "distance": 8416.8691506958,
            "duration": 2506,
            "id": "/fitnessActivities/419977607",
            "source": "RunKeeper",
            "start_time": "2014-08-23T20:00:53-05:00",
            "type": "Running"
        },
        {
            "distance": 584.734100243587,
            "duration": 751.130222320557,
            "id": "/fitnessActivities/419977115",
            "source": "RunKeeper",
            "start_time": "2014-08-22T15:03:05-05:00",
            "type": "Walking"
        },
        {
            "distance": 6282.225086944,
            "duration": 1764.244,
            "id": "/fitnessActivities/418476880",
            "source": "RunKeeper",
            "start_time": "2014-08-21T10:00:23-05:00",
            "type": "Running"
        },
        {
            "distance": 1207.008,
            "duration": 2700,
            "id": "/fitnessActivities/418456714",
            "source": "RunKeeper",
            "start_time": "2014-08-21T09:55:54-05:00",
            "type": "Swimming"
        },
        {
            "distance": 22893.1543807246,
            "duration": 2691.306,
            "id": "/fitnessActivities/417130087",
            "source": "RunKeeper",
            "start_time": "2014-08-19T11:36:16-05:00",
            "type": "Cycling"
        },
        {
            "distance": 560.496417331936,
            "duration": 833.033039391041,
            "id": "/fitnessActivities/417087276",
            "source": "RunKeeper",
            "start_time": "2014-08-19T09:03:33-05:00",
            "type": "Walking"
        },
        {
            "distance": 1207.008,
            "duration": 2700,
            "id": "/fitnessActivities/416694130",
            "source": "RunKeeper",
            "start_time": "2014-08-18T21:00:47-05:00",
            "type": "Swimming"
        },
        {
            "distance": 14496.9311975291,
            "duration": 4792.625,
            "id": "/fitnessActivities/416662032",
            "source": "RunKeeper",
            "start_time": "2014-08-18T18:29:37-05:00",
            "type": "Running"
        },
        {
            "distance": 0,
            "duration": 720,
            "id": "/fitnessActivities/415338757",
            "source": "RunKeeper",
            "start_time": "2014-08-16T08:52:27-05:00",
            "type": "Running"
        },
        {
            "distance": 59912.9008376086,
            "duration": 7271.219,
            "id": "/fitnessActivities/414973011",
            "source": "RunKeeper",
            "start_time": "2014-08-16T06:40:36-05:00",
            "type": "Cycling"
        },
        {
            "distance": 1544.39485802678,
            "duration": 1667.64448094368,
            "id": "/fitnessActivities/414881188",
            "source": "RunKeeper",
            "start_time": "2014-08-15T19:36:23-05:00",
            "type": "Walking"
        },
        {
            "distance": 0,
            "duration": 2400,
            "id": "/fitnessActivities/414103171",
            "source": "RunKeeper",
            "start_time": "2014-08-14T20:40:04-05:00",
            "type": "Cycling"
        },
        {
            "distance": 7257.43181636736,
            "duration": 2188.384,
            "id": "/fitnessActivities/412918797",
            "source": "RunKeeper",
            "start_time": "2014-08-13T05:59:00-05:00",
            "type": "Running"
        },
        {
            "distance": 965.606438369751,
            "duration": 1440,
            "id": "/fitnessActivities/412920149",
            "source": "RunKeeper",
            "start_time": "2014-08-13T05:00:28-05:00",
            "type": "Swimming"
        },
        {
            "distance": 25101.2417448298,
            "duration": 2836.447,
            "id": "/fitnessActivities/412413164",
            "source": "RunKeeper",
            "start_time": "2014-08-12T11:28:09-05:00",
            "type": "Cycling"
        },
        {
            "distance": 41650.3459162496,
            "duration": 4889.426,
            "id": "/fitnessActivities/410358092",
            "source": "RunKeeper",
            "start_time": "2014-08-09T09:40:17-05:00",
            "type": "Cycling"
        },
        {
            "distance": 1392.90933982896,
            "duration": 1010.37003850937,
            "id": "/fitnessActivities/410287489",
            "source": "RunKeeper",
            "start_time": "2014-08-08T15:41:33-05:00",
            "type": "Walking"
        },
        {
            "distance": 8221.84261036506,
            "duration": 2518.575,
            "id": "/fitnessActivities/409761921",
            "source": "RunKeeper",
            "start_time": "2014-08-08T11:28:02-05:00",
            "type": "Running"
        },
        {
            "distance": 804.672,
            "duration": 1080,
            "id": "/fitnessActivities/409828980",
            "source": "RunKeeper",
            "start_time": "2014-08-08T11:01:58-05:00",
            "type": "Swimming"
        },
        {
            "distance": 1300.50317372829,
            "duration": 1139.49841356278,
            "id": "/fitnessActivities/409199223",
            "source": "RunKeeper",
            "start_time": "2014-08-07T13:51:06-05:00",
            "type": "Walking"
        },
        {
            "distance": 23064.4370315435,
            "duration": 2653.46,
            "id": "/fitnessActivities/409078987",
            "source": "RunKeeper",
            "start_time": "2014-08-07T11:03:41-05:00",
            "type": "Cycling"
        },
        {
            "distance": 6599.89603568849,
            "duration": 2019.839,
            "id": "/fitnessActivities/408614479",
            "source": "RunKeeper",
            "start_time": "2014-08-06T18:18:43-05:00",
            "type": "Running"
        },
        {
            "distance": 804.672,
            "duration": 1160,
            "id": "/fitnessActivities/409830263",
            "source": "RunKeeper",
            "start_time": "2014-08-06T05:29:06-05:00",
            "type": "Swimming"
        },
        {
            "distance": 23283.4550286547,
            "duration": 2696.265,
            "id": "/fitnessActivities/407619135",
            "source": "RunKeeper",
            "start_time": "2014-08-05T11:22:59-05:00",
            "type": "Cycling"
        },
        {
            "distance": 1207.008,
            "duration": 1415,
            "id": "/fitnessActivities/406413295",
            "source": "RunKeeper",
            "start_time": "2014-08-03T19:49:42-05:00",
            "type": "Swimming"
        },
        {
            "distance": 13024.9445229469,
            "duration": 4451.293,
            "id": "/fitnessActivities/405992852",
            "source": "RunKeeper",
            "start_time": "2014-08-03T06:13:32-05:00",
            "type": "Running"
        },
        {
            "distance": 48598.669395617,
            "duration": 6138.742,
            "id": "/fitnessActivities/405420846",
            "source": "RunKeeper",
            "start_time": "2014-08-02T07:13:21-05:00",
            "type": "Cycling"
        },
        {
            "distance": 8194.07646001312,
            "duration": 2583.332,
            "id": "/fitnessActivities/404955502",
            "source": "RunKeeper",
            "start_time": "2014-08-01T11:38:40-05:00",
            "type": "Running"
        },
        {
            "distance": 901.232643836975,
            "duration": 1133,
            "id": "/fitnessActivities/404974020",
            "source": "RunKeeper",
            "start_time": "2014-08-01T11:15:34-05:00",
            "type": "Swimming"
        },
        {
            "distance": 23015.3657269702,
            "duration": 2614.511,
            "id": "/fitnessActivities/404330061",
            "source": "RunKeeper",
            "start_time": "2014-07-31T12:21:53-05:00",
            "type": "Cycling"
        },
        {
            "distance": 6578.55296744599,
            "duration": 1994.447,
            "id": "/fitnessActivities/403854563",
            "source": "RunKeeper",
            "start_time": "2014-07-30T19:22:01-05:00",
            "type": "Running"
        },
        {
            "distance": 901.232643836975,
            "duration": 1376,
            "id": "/fitnessActivities/403352154",
            "source": "RunKeeper",
            "start_time": "2014-07-30T06:14:05-05:00",
            "type": "Swimming"
        },
        {
            "distance": 643.813452340737,
            "duration": 970.74955958128,
            "id": "/fitnessActivities/403351335",
            "source": "RunKeeper",
            "start_time": "2014-07-29T16:35:53-05:00",
            "type": "Walking"
        },
        {
            "distance": 22856.3088762903,
            "duration": 2783.209,
            "id": "/fitnessActivities/402856039",
            "source": "RunKeeper",
            "start_time": "2014-07-29T11:56:01-05:00",
            "type": "Cycling"
        },
        {
            "distance": 997.79328767395,
            "duration": 1190,
            "id": "/fitnessActivities/401705180",
            "source": "RunKeeper",
            "start_time": "2014-07-27T21:31:32-05:00",
            "type": "Swimming"
        },
        {
            "distance": 11596.6869545545,
            "duration": 3633.904,
            "id": "/fitnessActivities/401304729",
            "source": "RunKeeper",
            "start_time": "2014-07-27T06:58:19-05:00",
            "type": "Running"
        },
        {
            "distance": 41609.5318329088,
            "duration": 5115.852,
            "id": "/fitnessActivities/400780037",
            "source": "RunKeeper",
            "start_time": "2014-07-26T08:12:52-05:00",
            "type": "Cycling"
        },
        {
            "distance": 852.952273956299,
            "duration": 1228,
            "id": "/fitnessActivities/400295721",
            "source": "RunKeeper",
            "start_time": "2014-07-25T12:25:15-05:00",
            "type": "Swimming"
        },
        {
            "distance": 6587.37423149164,
            "duration": 1964.354,
            "id": "/fitnessActivities/400119752",
            "source": "RunKeeper",
            "start_time": "2014-07-25T06:14:26-05:00",
            "type": "Running"
        },
        {
            "distance": 3415.99843536085,
            "duration": 1579.56995093823,
            "id": "/fitnessActivities/400119811",
            "source": "RunKeeper",
            "start_time": "2014-07-25T06:13:20-05:00",
            "type": "Walking"
        },
        {
            "distance": 22937.2858942066,
            "duration": 2758.936,
            "id": "/fitnessActivities/399659202",
            "source": "RunKeeper",
            "start_time": "2014-07-24T11:05:26-05:00",
            "type": "Cycling"
        },
        {
            "distance": 852.952273956299,
            "duration": 1260,
            "id": "/fitnessActivities/399238422",
            "source": "RunKeeper",
            "start_time": "2014-07-23T19:17:55-05:00",
            "type": "Swimming"
        },
        {
            "distance": 1695.8803762246,
            "duration": 1871.78108626604,
            "id": "/fitnessActivities/399152321",
            "source": "RunKeeper",
            "start_time": "2014-07-23T14:59:42-05:00",
            "type": "Walking"
        },
        {
            "distance": 6773.9296580357,
            "duration": 2020.718,
            "id": "/fitnessActivities/398790784",
            "source": "RunKeeper",
            "start_time": "2014-07-23T05:43:21-05:00",
            "type": "Running"
        },
        {
            "distance": 18863.547337993,
            "duration": 2517.196,
            "id": "/fitnessActivities/398292890",
            "source": "RunKeeper",
            "start_time": "2014-07-22T11:38:15-05:00",
            "type": "Cycling"
        },
        {
            "distance": 1802.67766655406,
            "duration": 1492.6284031868,
            "id": "/fitnessActivities/398190814",
            "source": "RunKeeper",
            "start_time": "2014-07-21T13:12:22-05:00",
            "type": "Walking"
        },
        {
            "distance": 804.672,
            "duration": 960,
            "id": "/fitnessActivities/397065378",
            "source": "RunKeeper",
            "start_time": "2014-07-20T15:47:28-05:00",
            "type": "Swimming"
        },
        {
            "distance": 3100.1511299184,
            "duration": 4312.37770915031,
            "id": "/fitnessActivities/397065405",
            "source": "RunKeeper",
            "start_time": "2014-07-20T13:25:43-05:00",
            "type": "Walking"
        },
        {
            "distance": 9726.86021291579,
            "duration": 3144.546,
            "id": "/fitnessActivities/396704941",
            "source": "RunKeeper",
            "start_time": "2014-07-20T06:41:28-05:00",
            "type": "Running"
        },
        {
            "distance": 33880.8739663405,
            "duration": 4381.049,
            "id": "/fitnessActivities/396222815",
            "source": "RunKeeper",
            "start_time": "2014-07-19T09:36:28-05:00",
            "type": "Cycling"
        },
        {
            "distance": 6564.44161588295,
            "duration": 2034.36,
            "id": "/fitnessActivities/395811267",
            "source": "RunKeeper",
            "start_time": "2014-07-18T17:15:25-05:00",
            "type": "Running"
        },
        {
            "distance": 804.672,
            "duration": 1200,
            "id": "/fitnessActivities/395751244",
            "source": "RunKeeper",
            "start_time": "2014-07-18T12:10:00-05:00",
            "type": "Swimming"
        },
        {
            "distance": 17082.9803649181,
            "duration": 2561.754,
            "id": "/fitnessActivities/395056854",
            "source": "RunKeeper",
            "start_time": "2014-07-17T11:19:50-05:00",
            "type": "Cycling"
        },
        {
            "distance": 804.672,
            "duration": 1260,
            "id": "/fitnessActivities/394108129",
            "source": "RunKeeper",
            "start_time": "2014-07-16T06:26:15-05:00",
            "type": "Swimming"
        },
        {
            "distance": 6488.49049162149,
            "duration": 1964.533,
            "id": "/fitnessActivities/394105469",
            "source": "RunKeeper",
            "start_time": "2014-07-16T05:50:02-05:00",
            "type": "Running"
        },
        {
            "distance": 0,
            "duration": 2400,
            "id": "/fitnessActivities/394106967",
            "source": "RunKeeper",
            "start_time": "2014-07-15T11:10:39-05:00",
            "type": "Cycling"
        },
        {
            "distance": 5082.33913553688,
            "duration": 7823.72407317162,
            "id": "/fitnessActivities/394084350",
            "source": "RunKeeper",
            "start_time": "2014-07-13T11:17:02-05:00",
            "type": "Walking"
        },
        {
            "distance": 3013.04695695465,
            "duration": 3623.51577675343,
            "id": "/fitnessActivities/394084343",
            "source": "RunKeeper",
            "start_time": "2014-07-11T11:22:21-05:00",
            "type": "Walking"
        },
        {
            "distance": 5139.14620486106,
            "duration": 7187.67966747284,
            "id": "/fitnessActivities/389664336",
            "source": "RunKeeper",
            "start_time": "2014-07-08T17:31:49-05:00",
            "type": "Walking"
        },
        {
            "distance": 1514.85518197821,
            "duration": 1236.48293012381,
            "id": "/fitnessActivities/389664333",
            "source": "RunKeeper",
            "start_time": "2014-07-07T13:16:43-05:00",
            "type": "Walking"
        },
        {
            "distance": 3027.43808118344,
            "duration": 2179.45904356241,
            "id": "/fitnessActivities/389664328",
            "source": "RunKeeper",
            "start_time": "2014-07-07T11:00:35-05:00",
            "type": "Walking"
        },
        {
            "distance": 1227.79012499333,
            "duration": 758.4549690485,
            "id": "/fitnessActivities/389664322",
            "source": "RunKeeper",
            "start_time": "2014-07-07T05:29:16-05:00",
            "type": "Walking"
        },
        {
            "distance": 8477.28092022394,
            "duration": 2852.217,
            "id": "/fitnessActivities/388011806",
            "source": "RunKeeper",
            "start_time": "2014-07-06T18:19:27-05:00",
            "type": "Running"
        },
        {
            "distance": 515.808189463579,
            "duration": 834.118914365768,
            "id": "/fitnessActivities/388011852",
            "source": "RunKeeper",
            "start_time": "2014-07-06T12:51:44-05:00",
            "type": "Walking"
        },
        {
            "distance": 8432.07285749371,
            "duration": 2697.179,
            "id": "/fitnessActivities/385960742",
            "source": "RunKeeper",
            "start_time": "2014-07-03T10:09:05-05:00",
            "type": "Running"
        },
        {
            "distance": 1448.20155397116,
            "duration": 1372.93373936415,
            "id": "/fitnessActivities/385934536",
            "source": "RunKeeper",
            "start_time": "2014-07-03T09:20:33-05:00",
            "type": "Walking"
        },
        {
            "distance": 8344.21462447948,
            "duration": 2647.132,
            "id": "/fitnessActivities/385131290",
            "source": "RunKeeper",
            "start_time": "2014-07-02T05:41:32-05:00",
            "type": "Running"
        },
        {
            "distance": 8482.87716598323,
            "duration": 2715.864,
            "id": "/fitnessActivities/384635465",
            "source": "RunKeeper",
            "start_time": "2014-07-01T11:15:20-05:00",
            "type": "Running"
        },
        {
            "distance": 7842.40527710117,
            "duration": 12128.3420445919,
            "id": "/fitnessActivities/384635542",
            "source": "RunKeeper",
            "start_time": "2014-06-28T08:11:16-05:00",
            "type": "Walking"
        },
        {
            "distance": 1285.35462190851,
            "duration": 947.856944203377,
            "id": "/fitnessActivities/384635537",
            "source": "RunKeeper",
            "start_time": "2014-06-27T14:36:54-05:00",
            "type": "Walking"
        },
        {
            "distance": 6328.75101525229,
            "duration": 1975.869,
            "id": "/fitnessActivities/382011695",
            "source": "RunKeeper",
            "start_time": "2014-06-27T06:05:05-05:00",
            "type": "Running"
        },
        {
            "distance": 8481.05753528722,
            "duration": 2667.72,
            "id": "/fitnessActivities/381578100",
            "source": "RunKeeper",
            "start_time": "2014-06-26T11:07:36-05:00",
            "type": "Running"
        },
        {
            "distance": 8404.17449722105,
            "duration": 2788.246,
            "id": "/fitnessActivities/380213395",
            "source": "RunKeeper",
            "start_time": "2014-06-24T10:54:08-05:00",
            "type": "Running"
        },
        {
            "distance": 3327.37940721513,
            "duration": 3010.86454612017,
            "id": "/fitnessActivities/380213605",
            "source": "RunKeeper",
            "start_time": "2014-06-23T11:39:26-05:00",
            "type": "Walking"
        },
        {
            "distance": 1074.78975161354,
            "duration": 1610.71712613106,
            "id": "/fitnessActivities/380213597",
            "source": "RunKeeper",
            "start_time": "2014-06-21T08:11:04-05:00",
            "type": "Walking"
        },
        {
            "distance": 1614.07819639778,
            "duration": 1368.81757253408,
            "id": "/fitnessActivities/380213589",
            "source": "RunKeeper",
            "start_time": "2014-06-21T06:42:52-05:00",
            "type": "Walking"
        },
        {
            "distance": 7643.95924826202,
            "duration": 7134.99921923876,
            "id": "/fitnessActivities/380213585",
            "source": "RunKeeper",
            "start_time": "2014-06-21T04:18:26-05:00",
            "type": "Walking"
        },
        {
            "distance": 2291.97589033302,
            "duration": 2186.42296981811,
            "id": "/fitnessActivities/380213578",
            "source": "RunKeeper",
            "start_time": "2014-06-21T03:27:57-05:00",
            "type": "Walking"
        },
        {
            "distance": 1225.51784222037,
            "duration": 1686.86898171902,
            "id": "/fitnessActivities/380213565",
            "source": "RunKeeper",
            "start_time": "2014-06-20T12:59:45-05:00",
            "type": "Walking"
        },
        {
            "distance": 4024.2127909251,
            "duration": 5018.65035200119,
            "id": "/fitnessActivities/380213559",
            "source": "RunKeeper",
            "start_time": "2014-06-20T11:13:33-05:00",
            "type": "Walking"
        },
        {
            "distance": 4886.1653894707,
            "duration": 5866.18831688166,
            "id": "/fitnessActivities/380213551",
            "source": "RunKeeper",
            "start_time": "2014-06-20T05:42:24-05:00",
            "type": "Walking"
        },
        {
            "distance": 1451.98869192611,
            "duration": 1843.63714593649,
            "id": "/fitnessActivities/380213546",
            "source": "RunKeeper",
            "start_time": "2014-06-20T04:47:20-05:00",
            "type": "Walking"
        },
        {
            "distance": 833.927777679002,
            "duration": 1046.76421129703,
            "id": "/fitnessActivities/380213540",
            "source": "RunKeeper",
            "start_time": "2014-06-20T03:00:56-05:00",
            "type": "Walking"
        },
        {
            "distance": 8505.76799902398,
            "duration": 2561.705,
            "id": "/fitnessActivities/373778307",
            "source": "RunKeeper",
            "start_time": "2014-06-14T09:55:53-05:00",
            "type": "Running"
        },
        {
            "distance": 8428.35310625296,
            "duration": 2656.018,
            "id": "/fitnessActivities/373230072",
            "source": "RunKeeper",
            "start_time": "2014-06-13T11:03:15-05:00",
            "type": "Running"
        },
        {
            "distance": 4250.76045493788,
            "duration": 1435.959,
            "id": "/fitnessActivities/372660560",
            "source": "RunKeeper",
            "start_time": "2014-06-12T11:43:24-05:00",
            "type": "Running"
        },
        {
            "distance": 8431.33667573487,
            "duration": 2476.039,
            "id": "/fitnessActivities/371316121",
            "source": "RunKeeper",
            "start_time": "2014-06-10T11:12:38-05:00",
            "type": "Running"
        },
        {
            "distance": 8468.63127858502,
            "duration": 2632.065,
            "id": "/fitnessActivities/366775219",
            "source": "RunKeeper",
            "start_time": "2014-06-03T10:57:53-05:00",
            "type": "Running"
        },
        {
            "distance": 8509.01319256829,
            "duration": 2668.931,
            "id": "/fitnessActivities/365219830",
            "source": "RunKeeper",
            "start_time": "2014-06-01T07:28:07-05:00",
            "type": "Running"
        },
        {
            "distance": 2346.51067688424,
            "duration": 1839.00809586048,
            "id": "/fitnessActivities/363759893",
            "source": "RunKeeper",
            "start_time": "2014-05-29T11:56:37-05:00",
            "type": "Walking"
        },
        {
            "distance": 6595.46622599448,
            "duration": 2090.445,
            "id": "/fitnessActivities/362828209",
            "source": "RunKeeper",
            "start_time": "2014-05-28T11:24:30-05:00",
            "type": "Running"
        },
        {
            "distance": 1801.92023896308,
            "duration": 2832.29777544737,
            "id": "/fitnessActivities/362828312",
            "source": "RunKeeper",
            "start_time": "2014-05-27T18:29:01-05:00",
            "type": "Walking"
        },
        {
            "distance": 1415.63216755863,
            "duration": 1006.79460012913,
            "id": "/fitnessActivities/362828302",
            "source": "RunKeeper",
            "start_time": "2014-05-27T12:47:34-05:00",
            "type": "Walking"
        },
        {
            "distance": 8430.25998096452,
            "duration": 2582.592,
            "id": "/fitnessActivities/360248861",
            "source": "RunKeeper",
            "start_time": "2014-05-24T09:30:31-05:00",
            "type": "Running"
        },
        {
            "distance": 11063.6198417212,
            "duration": 3348.247,
            "id": "/fitnessActivities/357471557",
            "source": "RunKeeper",
            "start_time": "2014-05-20T05:26:34-05:00",
            "type": "Running"
        },
        {
            "distance": 1346.70625677862,
            "duration": 996.294227540493,
            "id": "/fitnessActivities/357441515",
            "source": "RunKeeper",
            "start_time": "2014-05-19T09:45:07-05:00",
            "type": "Walking"
        },
        {
            "distance": 3559.15225005779,
            "duration": 5351.27356773615,
            "id": "/fitnessActivities/357441510",
            "source": "RunKeeper",
            "start_time": "2014-05-18T11:47:29-05:00",
            "type": "Walking"
        },
        {
            "distance": 4606.67460839572,
            "duration": 6012.22129225731,
            "id": "/fitnessActivities/357441501",
            "source": "RunKeeper",
            "start_time": "2014-05-18T09:53:40-05:00",
            "type": "Walking"
        },
        {
            "distance": 8490.80121760175,
            "duration": 2546.494,
            "id": "/fitnessActivities/354441940",
            "source": "RunKeeper",
            "start_time": "2014-05-15T10:26:38-05:00",
            "type": "Running"
        },
        {
            "distance": 8474.86858601295,
            "duration": 2653.58,
            "id": "/fitnessActivities/353172602",
            "source": "RunKeeper",
            "start_time": "2014-05-13T11:27:19-05:00",
            "type": "Running"
        },
        {
            "distance": 1901.14325338265,
            "duration": 2043.73443627358,
            "id": "/fitnessActivities/353129368",
            "source": "RunKeeper",
            "start_time": "2014-05-12T11:23:52-05:00",
            "type": "Walking"
        },
        {
            "distance": 9264.23172587469,
            "duration": 2990.751,
            "id": "/fitnessActivities/352279441",
            "source": "RunKeeper",
            "start_time": "2014-05-12T05:01:18-05:00",
            "type": "Running"
        },
        {
            "distance": 6374.14483345738,
            "duration": 2145.782,
            "id": "/fitnessActivities/350629496",
            "source": "RunKeeper",
            "start_time": "2014-05-09T05:51:32-05:00",
            "type": "Running"
        },
        {
            "distance": 8350.4512992257,
            "duration": 2680.486,
            "id": "/fitnessActivities/350629570",
            "source": "RunKeeper",
            "start_time": "2014-05-08T11:25:17-05:00",
            "type": "Running"
        },
        {
            "distance": 1198.25044894476,
            "duration": 1830.66409730911,
            "id": "/fitnessActivities/350629672",
            "source": "RunKeeper",
            "start_time": "2014-05-07T07:32:10-05:00",
            "type": "Walking"
        },
        {
            "distance": 8502.03155814502,
            "duration": 2609.348,
            "id": "/fitnessActivities/350629744",
            "source": "RunKeeper",
            "start_time": "2014-05-06T11:38:55-05:00",
            "type": "Running"
        },
        {
            "distance": 2221.53512437104,
            "duration": 1659.40763068199,
            "id": "/fitnessActivities/348880648",
            "source": "RunKeeper",
            "start_time": "2014-05-05T15:25:05-05:00",
            "type": "Walking"
        },
        {
            "distance": 4157.52004693918,
            "duration": 3586.52438479662,
            "id": "/fitnessActivities/348880642",
            "source": "RunKeeper",
            "start_time": "2014-05-05T10:53:07-05:00",
            "type": "Walking"
        },
        {
            "distance": 6382.37381256175,
            "duration": 2096.908,
            "id": "/fitnessActivities/347829966",
            "source": "RunKeeper",
            "start_time": "2014-05-04T20:24:11-05:00",
            "type": "Running"
        },
        {
            "distance": 880.888288320326,
            "duration": 1364.20986229181,
            "id": "/fitnessActivities/347830007",
            "source": "RunKeeper",
            "start_time": "2014-05-04T13:43:03-05:00",
            "type": "Walking"
        },
        {
            "distance": 8457.25678756213,
            "duration": 2693.241,
            "id": "/fitnessActivities/346906380",
            "source": "RunKeeper",
            "start_time": "2014-05-03T10:29:03-05:00",
            "type": "Running"
        },
        {
            "distance": 4839.20487882938,
            "duration": 5023.32112842798,
            "id": "/fitnessActivities/346906522",
            "source": "RunKeeper",
            "start_time": "2014-05-03T08:26:30-05:00",
            "type": "Walking"
        },
        {
            "distance": 2512.38731931085,
            "duration": 1878.46690005064,
            "id": "/fitnessActivities/346906519",
            "source": "RunKeeper",
            "start_time": "2014-05-01T11:34:17-05:00",
            "type": "Walking"
        },
        {
            "distance": 6160.16726086326,
            "duration": 2123.902,
            "id": "/fitnessActivities/345220872",
            "source": "RunKeeper",
            "start_time": "2014-04-30T14:56:54-05:00",
            "type": "Running"
        },
        {
            "distance": 2350.29781483918,
            "duration": 2254.27587962151,
            "id": "/fitnessActivities/342591977",
            "source": "RunKeeper",
            "start_time": "2014-04-25T06:51:55-05:00",
            "type": "Walking"
        },
        {
            "distance": 523.38246537347,
            "duration": 809.272674143314,
            "id": "/fitnessActivities/342591972",
            "source": "RunKeeper",
            "start_time": "2014-04-24T22:12:31-05:00",
            "type": "Walking"
        },
        {
            "distance": 919.517095460771,
            "duration": 914.7582269907,
            "id": "/fitnessActivities/342591969",
            "source": "RunKeeper",
            "start_time": "2014-04-24T17:56:10-05:00",
            "type": "Walking"
        },
        {
            "distance": 1896.59868783671,
            "duration": 2025.92154824734,
            "id": "/fitnessActivities/342591966",
            "source": "RunKeeper",
            "start_time": "2014-04-23T10:20:25-05:00",
            "type": "Walking"
        },
        {
            "distance": 2020.81681275893,
            "duration": 1896.82099753618,
            "id": "/fitnessActivities/342591961",
            "source": "RunKeeper",
            "start_time": "2014-04-22T13:11:59-05:00",
            "type": "Walking"
        },
        {
            "distance": 1970.82659175365,
            "duration": 1445.90573567152,
            "id": "/fitnessActivities/342591956",
            "source": "RunKeeper",
            "start_time": "2014-04-21T12:14:55-05:00",
            "type": "Walking"
        },
        {
            "distance": 0,
            "duration": 1800,
            "id": "/fitnessActivities/335605829",
            "source": "RunKeeper",
            "start_time": "2014-04-14T18:31:51-05:00",
            "type": "Cycling"
        },
        {
            "distance": 1619.3801895347,
            "duration": 1256.84090805054,
            "id": "/fitnessActivities/335605887",
            "source": "RunKeeper",
            "start_time": "2014-04-11T14:42:10-05:00",
            "type": "Walking"
        },
        {
            "distance": 3891.66296250201,
            "duration": 3399.0443123579,
            "id": "/fitnessActivities/335605886",
            "source": "RunKeeper",
            "start_time": "2014-04-11T12:06:03-05:00",
            "type": "Walking"
        },
        {
            "distance": 3796.98451362837,
            "duration": 3814.47017771006,
            "id": "/fitnessActivities/335605882",
            "source": "RunKeeper",
            "start_time": "2014-04-09T12:01:48-05:00",
            "type": "Walking"
        },
        {
            "distance": 896.036840140108,
            "duration": 915.59033703804,
            "id": "/fitnessActivities/335605879",
            "source": "RunKeeper",
            "start_time": "2014-04-09T07:42:37-05:00",
            "type": "Walking"
        },
        {
            "distance": 8471.45044230624,
            "duration": 2844.282,
            "id": "/fitnessActivities/331869915",
            "source": "RunKeeper",
            "start_time": "2014-04-08T12:17:13-05:00",
            "type": "Running"
        },
        {
            "distance": 2927.45763917288,
            "duration": 3041.80875575542,
            "id": "/fitnessActivities/330516985",
            "source": "RunKeeper",
            "start_time": "2014-04-05T14:27:43-05:00",
            "type": "Walking"
        },
        {
            "distance": 1826.91534946572,
            "duration": 1600.48504656553,
            "id": "/fitnessActivities/330516982",
            "source": "RunKeeper",
            "start_time": "2014-04-04T09:57:08-05:00",
            "type": "Walking"
        },
        {
            "distance": 3344.04281421689,
            "duration": 3072.62845462561,
            "id": "/fitnessActivities/330516979",
            "source": "RunKeeper",
            "start_time": "2014-04-03T11:34:00-05:00",
            "type": "Walking"
        },
        {
            "distance": 2201.84200700532,
            "duration": 1602.97419202328,
            "id": "/fitnessActivities/330516977",
            "source": "RunKeeper",
            "start_time": "2014-04-02T13:52:30-05:00",
            "type": "Walking"
        },
        {
            "distance": 766.516722080972,
            "duration": 1273.95422595739,
            "id": "/fitnessActivities/330516973",
            "source": "RunKeeper",
            "start_time": "2014-04-01T13:27:58-05:00",
            "type": "Walking"
        },
        {
            "distance": 1601.95935494195,
            "duration": 1704.90795296431,
            "id": "/fitnessActivities/330516968",
            "source": "RunKeeper",
            "start_time": "2014-03-31T14:38:57-05:00",
            "type": "Walking"
        },
        {
            "distance": 1875.39071528902,
            "duration": 2482.54662841559,
            "id": "/fitnessActivities/330516963",
            "source": "RunKeeper",
            "start_time": "2014-03-30T16:50:18-05:00",
            "type": "Walking"
        },
        {
            "distance": 2627.5163131412,
            "duration": 2092.03652197123,
            "id": "/fitnessActivities/330516820",
            "source": "RunKeeper",
            "start_time": "2014-03-17T11:23:02-05:00",
            "type": "Walking"
        },
        {
            "distance": 1236.87925608521,
            "duration": 1305.63717848062,
            "id": "/fitnessActivities/330516813",
            "source": "RunKeeper",
            "start_time": "2014-03-13T13:39:38-05:00",
            "type": "Walking"
        },
        {
            "distance": 7110.92943155667,
            "duration": 2264.891,
            "id": "/fitnessActivities/316483941",
            "source": "RunKeeper",
            "start_time": "2014-03-11T05:08:27-05:00",
            "type": "Running"
        },
        {
            "distance": 1705.72693490746,
            "duration": 1418.81713628769,
            "id": "/fitnessActivities/316468157",
            "source": "RunKeeper",
            "start_time": "2014-03-10T16:30:01-05:00",
            "type": "Walking"
        },
        {
            "distance": 2216.9905588251,
            "duration": 3018.34852677584,
            "id": "/fitnessActivities/316468153",
            "source": "RunKeeper",
            "start_time": "2014-03-10T12:05:22-05:00",
            "type": "Walking"
        },
        {
            "distance": 1843.57875646748,
            "duration": 1752.19169521332,
            "id": "/fitnessActivities/316468149",
            "source": "RunKeeper",
            "start_time": "2014-03-10T08:47:17-05:00",
            "type": "Walking"
        },
        {
            "distance": 1434.56785733336,
            "duration": 1320.92569583654,
            "id": "/fitnessActivities/316468144",
            "source": "RunKeeper",
            "start_time": "2014-03-08T18:03:03-06:00",
            "type": "Walking"
        },
        {
            "distance": 981.626157921877,
            "duration": 890.423540472984,
            "id": "/fitnessActivities/316468136",
            "source": "RunKeeper",
            "start_time": "2014-03-08T16:29:46-06:00",
            "type": "Walking"
        },
        {
            "distance": 4221.90139217326,
            "duration": 3479.63935858011,
            "id": "/fitnessActivities/316468132",
            "source": "RunKeeper",
            "start_time": "2014-03-08T11:07:55-06:00",
            "type": "Walking"
        },
        {
            "distance": 988.443006240779,
            "duration": 962.091210186481,
            "id": "/fitnessActivities/316468128",
            "source": "RunKeeper",
            "start_time": "2014-03-07T15:31:21-06:00",
            "type": "Walking"
        },
        {
            "distance": 941.482495599455,
            "duration": 1162.71612143516,
            "id": "/fitnessActivities/316468124",
            "source": "RunKeeper",
            "start_time": "2014-03-07T14:58:58-06:00",
            "type": "Walking"
        },
        {
            "distance": 2119.28239958751,
            "duration": 1910.52772849798,
            "id": "/fitnessActivities/316468120",
            "source": "RunKeeper",
            "start_time": "2014-03-07T10:20:27-06:00",
            "type": "Walking"
        },
        {
            "distance": 2164.72805504685,
            "duration": 2173.49074691534,
            "id": "/fitnessActivities/311616659",
            "source": "RunKeeper",
            "start_time": "2014-03-01T10:15:44-06:00",
            "type": "Walking"
        },
        {
            "distance": 10291.5953912919,
            "duration": 3003.648,
            "id": "/fitnessActivities/311587635",
            "source": "RunKeeper",
            "start_time": "2014-03-01T09:24:11-06:00",
            "type": "Running"
        },
        {
            "distance": 1584.5385203492,
            "duration": 1155.07598358393,
            "id": "/fitnessActivities/311551813",
            "source": "RunKeeper",
            "start_time": "2014-03-01T08:40:41-06:00",
            "type": "Walking"
        },
        {
            "distance": 853.620895044719,
            "duration": 1311.53870242834,
            "id": "/fitnessActivities/311551810",
            "source": "RunKeeper",
            "start_time": "2014-02-27T11:53:37-06:00",
            "type": "Walking"
        },
        {
            "distance": 905.125971231978,
            "duration": 973.590282976627,
            "id": "/fitnessActivities/311551805",
            "source": "RunKeeper",
            "start_time": "2014-02-26T13:33:32-06:00",
            "type": "Walking"
        },
        {
            "distance": 1780.71226641538,
            "duration": 1503.58209520578,
            "id": "/fitnessActivities/310274037",
            "source": "RunKeeper",
            "start_time": "2014-02-25T10:14:01-06:00",
            "type": "Walking"
        },
        {
            "distance": 1892.81154988177,
            "duration": 1254.30496829748,
            "id": "/fitnessActivities/310274036",
            "source": "RunKeeper",
            "start_time": "2014-02-25T05:24:34-06:00",
            "type": "Walking"
        },
        {
            "distance": 905.883398822967,
            "duration": 1510.20532441139,
            "id": "/fitnessActivities/310274034",
            "source": "RunKeeper",
            "start_time": "2014-02-21T16:21:01-06:00",
            "type": "Walking"
        },
        {
            "distance": 802.11581885746,
            "duration": 854.39233738184,
            "id": "/fitnessActivities/310274030",
            "source": "RunKeeper",
            "start_time": "2014-02-21T13:05:43-06:00",
            "type": "Walking"
        },
        {
            "distance": 2476.03079494338,
            "duration": 3370.97583788633,
            "id": "/fitnessActivities/310274028",
            "source": "RunKeeper",
            "start_time": "2014-02-20T16:48:24-06:00",
            "type": "Walking"
        },
        {
            "distance": 2464.66938107854,
            "duration": 1948.47598487139,
            "id": "/fitnessActivities/310274027",
            "source": "RunKeeper",
            "start_time": "2014-02-20T14:30:38-06:00",
            "type": "Walking"
        },
        {
            "distance": 3485.68177373185,
            "duration": 3304.9359395504,
            "id": "/fitnessActivities/310274024",
            "source": "RunKeeper",
            "start_time": "2014-02-20T11:19:57-06:00",
            "type": "Walking"
        },
        {
            "distance": 1506.52347847732,
            "duration": 1098.94544351101,
            "id": "/fitnessActivities/307125914",
            "source": "RunKeeper",
            "start_time": "2014-02-19T14:37:50-06:00",
            "type": "Walking"
        },
        {
            "distance": 6091.97666914588,
            "duration": 1993.668,
            "id": "/fitnessActivities/307028849",
            "source": "RunKeeper",
            "start_time": "2014-02-19T11:00:27-06:00",
            "type": "Running"
        },
        {
            "distance": 720.313639030637,
            "duration": 964.635952174664,
            "id": "/fitnessActivities/307011157",
            "source": "RunKeeper",
            "start_time": "2014-02-18T14:05:45-06:00",
            "type": "Walking"
        },
        {
            "distance": 1764.04885941362,
            "duration": 1378.78963452578,
            "id": "/fitnessActivities/307011154",
            "source": "RunKeeper",
            "start_time": "2014-02-18T05:21:11-06:00",
            "type": "Walking"
        },
        {
            "distance": 1984.46028839145,
            "duration": 2617.19022023678,
            "id": "/fitnessActivities/307011151",
            "source": "RunKeeper",
            "start_time": "2014-02-17T18:32:59-06:00",
            "type": "Walking"
        },
        {
            "distance": 2198.05486905038,
            "duration": 1497.06533282995,
            "id": "/fitnessActivities/307011149",
            "source": "RunKeeper",
            "start_time": "2014-02-17T14:33:01-06:00",
            "type": "Walking"
        },
        {
            "distance": 2290.46103515105,
            "duration": 2008.30948859453,
            "id": "/fitnessActivities/307011147",
            "source": "RunKeeper",
            "start_time": "2014-02-17T11:39:00-06:00",
            "type": "Walking"
        },
        {
            "distance": 1056.6114894298,
            "duration": 983.370442569256,
            "id": "/fitnessActivities/305565310",
            "source": "RunKeeper",
            "start_time": "2014-02-16T09:20:09-06:00",
            "type": "Walking"
        },
        {
            "distance": 21561.1897986615,
            "duration": 6809,
            "id": "/fitnessActivities/305539657",
            "source": "RunKeeper",
            "start_time": "2014-02-16T07:01:56-06:00",
            "type": "Running"
        },
        {
            "distance": 845.289191543839,
            "duration": 811.844299554825,
            "id": "/fitnessActivities/305293258",
            "source": "RunKeeper",
            "start_time": "2014-02-15T18:48:04-06:00",
            "type": "Walking"
        },
        {
            "distance": 869.52687445549,
            "duration": 1134.3946723938,
            "id": "/fitnessActivities/305293257",
            "source": "RunKeeper",
            "start_time": "2014-02-15T17:43:22-06:00",
            "type": "Walking"
        },
        {
            "distance": 1342.91911882368,
            "duration": 1520.50616019964,
            "id": "/fitnessActivities/305293256",
            "source": "RunKeeper",
            "start_time": "2014-02-15T15:48:18-06:00",
            "type": "Walking"
        },
        {
            "distance": 1664.06841740306,
            "duration": 1642.93161183596,
            "id": "/fitnessActivities/305293255",
            "source": "RunKeeper",
            "start_time": "2014-02-14T10:31:38-06:00",
            "type": "Walking"
        },
        {
            "distance": 1678.45954163185,
            "duration": 1521.14473229647,
            "id": "/fitnessActivities/305293254",
            "source": "RunKeeper",
            "start_time": "2014-02-13T13:14:47-06:00",
            "type": "Walking"
        },
        {
            "distance": 3438.72126309053,
            "duration": 2167.95348924398,
            "id": "/fitnessActivities/305293252",
            "source": "RunKeeper",
            "start_time": "2014-02-13T10:45:24-06:00",
            "type": "Walking"
        },
        {
            "distance": 983.898440694844,
            "duration": 816.463030815125,
            "id": "/fitnessActivities/305293251",
            "source": "RunKeeper",
            "start_time": "2014-02-12T14:56:45-06:00",
            "type": "Walking"
        },
        {
            "distance": 2984.26470849706,
            "duration": 2267.85471731424,
            "id": "/fitnessActivities/305293250",
            "source": "RunKeeper",
            "start_time": "2014-02-12T11:22:22-06:00",
            "type": "Walking"
        },
        {
            "distance": 1537.57800970788,
            "duration": 2283.45880031586,
            "id": "/fitnessActivities/305293248",
            "source": "RunKeeper",
            "start_time": "2014-02-11T17:50:54-06:00",
            "type": "Walking"
        },
        {
            "distance": 1643.61787244635,
            "duration": 2164.32607913017,
            "id": "/fitnessActivities/305293245",
            "source": "RunKeeper",
            "start_time": "2014-02-11T12:07:09-06:00",
            "type": "Walking"
        },
        {
            "distance": 16928.2342642879,
            "duration": 5481.579,
            "id": "/fitnessActivities/302246909",
            "source": "RunKeeper",
            "start_time": "2014-02-08T05:44:41-06:00",
            "type": "Running"
        },
        {
            "distance": 3145.59678537774,
            "duration": 1985.43179053068,
            "id": "/fitnessActivities/302207537",
            "source": "RunKeeper",
            "start_time": "2014-02-07T14:28:35-06:00",
            "type": "Walking"
        },
        {
            "distance": 8294.7593400279,
            "duration": 2533.003,
            "id": "/fitnessActivities/301266188",
            "source": "RunKeeper",
            "start_time": "2014-02-05T11:30:40-06:00",
            "type": "Running"
        },
        {
            "distance": 686.229397436127,
            "duration": 1147.71175909042,
            "id": "/fitnessActivities/300321433",
            "source": "RunKeeper",
            "start_time": "2014-02-01T15:44:33-06:00",
            "type": "Walking"
        },
        {
            "distance": 1801.92023896308,
            "duration": 1568.84587842226,
            "id": "/fitnessActivities/300321431",
            "source": "RunKeeper",
            "start_time": "2014-01-31T11:32:04-06:00",
            "type": "Walking"
        },
        {
            "distance": 3250.12179293424,
            "duration": 3580.30300480127,
            "id": "/fitnessActivities/300321429",
            "source": "RunKeeper",
            "start_time": "2014-01-30T11:10:51-06:00",
            "type": "Walking"
        },
        {
            "distance": 4217.35682662732,
            "duration": 2975.23265725374,
            "id": "/fitnessActivities/297531596",
            "source": "RunKeeper",
            "start_time": "2014-01-27T11:31:45-06:00",
            "type": "Walking"
        },
        {
            "distance": 8518.47508902429,
            "duration": 2456.364,
            "id": "/fitnessActivities/297112165",
            "source": "RunKeeper",
            "start_time": "2014-01-26T10:41:06-06:00",
            "type": "Running"
        },
        {
            "distance": 2174.57461372971,
            "duration": 1609.44851362705,
            "id": "/fitnessActivities/295818177",
            "source": "RunKeeper",
            "start_time": "2014-01-22T13:36:57-06:00",
            "type": "Walking"
        },
        {
            "distance": 15565.9513160852,
            "duration": 5059.624,
            "id": "/fitnessActivities/295043594",
            "source": "RunKeeper",
            "start_time": "2014-01-21T10:23:36-06:00",
            "type": "Running"
        },
        {
            "distance": 1132.35424852871,
            "duration": 1184.54233527184,
            "id": "/fitnessActivities/295007044",
            "source": "RunKeeper",
            "start_time": "2014-01-21T05:16:24-06:00",
            "type": "Walking"
        },
        {
            "distance": 2535.11014704053,
            "duration": 2036.80294555426,
            "id": "/fitnessActivities/295007043",
            "source": "RunKeeper",
            "start_time": "2014-01-20T20:57:35-06:00",
            "type": "Walking"
        },
        {
            "distance": 2209.41628291521,
            "duration": 2335.83548080921,
            "id": "/fitnessActivities/295007042",
            "source": "RunKeeper",
            "start_time": "2014-01-20T14:56:08-06:00",
            "type": "Walking"
        },
        {
            "distance": 12143.9723418687,
            "duration": 3626.223,
            "id": "/fitnessActivities/293591315",
            "source": "RunKeeper",
            "start_time": "2014-01-18T09:49:42-06:00",
            "type": "Running"
        },
        {
            "distance": 3043.34406059421,
            "duration": 2671.25431060791,
            "id": "/fitnessActivities/293559499",
            "source": "RunKeeper",
            "start_time": "2014-01-16T11:13:15-06:00",
            "type": "Walking"
        },
        {
            "distance": 3306.17143466743,
            "duration": 2888.99445343018,
            "id": "/fitnessActivities/293559497",
            "source": "RunKeeper",
            "start_time": "2014-01-15T10:30:55-06:00",
            "type": "Walking"
        },
        {
            "distance": 8279.86121222183,
            "duration": 2606.844,
            "id": "/fitnessActivities/291896038",
            "source": "RunKeeper",
            "start_time": "2014-01-14T12:09:37-06:00",
            "type": "Running"
        },
        {
            "distance": 2214.71827605214,
            "duration": 1439.5502422452,
            "id": "/fitnessActivities/291605823",
            "source": "RunKeeper",
            "start_time": "2014-01-13T14:35:00-06:00",
            "type": "Walking"
        },
        {
            "distance": 1171.74048326014,
            "duration": 817.00994938612,
            "id": "/fitnessActivities/291605822",
            "source": "RunKeeper",
            "start_time": "2014-01-13T11:53:47-06:00",
            "type": "Walking"
        },
        {
            "distance": 1454.26097469908,
            "duration": 1102.3811930418,
            "id": "/fitnessActivities/291605821",
            "source": "RunKeeper",
            "start_time": "2014-01-13T10:50:27-06:00",
            "type": "Walking"
        },
        {
            "distance": 2391.1989047526,
            "duration": 1665.19928985834,
            "id": "/fitnessActivities/291605820",
            "source": "RunKeeper",
            "start_time": "2014-01-10T11:55:52-06:00",
            "type": "Walking"
        },
        {
            "distance": 1734.50918336504,
            "duration": 1633.30010473728,
            "id": "/fitnessActivities/291605819",
            "source": "RunKeeper",
            "start_time": "2014-01-10T10:04:05-06:00",
            "type": "Walking"
        },
        {
            "distance": 3319.80513130524,
            "duration": 2996.05794233084,
            "id": "/fitnessActivities/291605817",
            "source": "RunKeeper",
            "start_time": "2014-01-09T11:08:16-06:00",
            "type": "Walking"
        },
        {
            "distance": 2938.06162544673,
            "duration": 2581.64967751503,
            "id": "/fitnessActivities/289262054",
            "source": "RunKeeper",
            "start_time": "2014-01-08T13:44:32-06:00",
            "type": "Walking"
        },
        {
            "distance": 8390.83725975886,
            "duration": 2524.679,
            "id": "/fitnessActivities/289124766",
            "source": "RunKeeper",
            "start_time": "2014-01-08T11:11:24-06:00",
            "type": "Running"
        },
        {
            "distance": 8388.80439151812,
            "duration": 2669.227,
            "id": "/fitnessActivities/287762766",
            "source": "RunKeeper",
            "start_time": "2014-01-05T10:01:37-06:00",
            "type": "Running"
        },
        {
            "distance": 2496.48133990008,
            "duration": 2845.95476746559,
            "id": "/fitnessActivities/287741491",
            "source": "RunKeeper",
            "start_time": "2014-01-04T11:52:05-06:00",
            "type": "Walking"
        },
        {
            "distance": 2559.34782995218,
            "duration": 1884.7072917223,
            "id": "/fitnessActivities/286997971",
            "source": "RunKeeper",
            "start_time": "2014-01-03T13:48:31-06:00",
            "type": "Walking"
        },
        {
            "distance": 8367.86781316084,
            "duration": 2687.944,
            "id": "/fitnessActivities/286868854",
            "source": "RunKeeper",
            "start_time": "2014-01-03T11:01:10-06:00",
            "type": "Running"
        },
        {
            "distance": 1772.3805629145,
            "duration": 1673.61571550369,
            "id": "/fitnessActivities/286821050",
            "source": "RunKeeper",
            "start_time": "2014-01-02T18:56:50-06:00",
            "type": "Walking"
        },
        {
            "distance": 3601.56819515318,
            "duration": 4111.98561161757,
            "id": "/fitnessActivities/286821046",
            "source": "RunKeeper",
            "start_time": "2014-01-02T11:28:41-06:00",
            "type": "Walking"
        },
        {
            "distance": 2942.60619099266,
            "duration": 1940.75673413277,
            "id": "/fitnessActivities/285788455",
            "source": "RunKeeper",
            "start_time": "2013-12-31T15:00:31-06:00",
            "type": "Walking"
        },
        {
            "distance": 1670.12783813097,
            "duration": 1182.57754087448,
            "id": "/fitnessActivities/285709461",
            "source": "RunKeeper",
            "start_time": "2013-12-31T05:07:15-06:00",
            "type": "Walking"
        },
        {
            "distance": 1233.09211813026,
            "duration": 903.485604703426,
            "id": "/fitnessActivities/285709460",
            "source": "RunKeeper",
            "start_time": "2013-12-30T14:37:37-06:00",
            "type": "Walking"
        },
        {
            "distance": 3057.73518482301,
            "duration": 2268.97211819887,
            "id": "/fitnessActivities/285709458",
            "source": "RunKeeper",
            "start_time": "2013-12-30T11:24:49-06:00",
            "type": "Walking"
        },
        {
            "distance": 11849.5673591135,
            "duration": 3696.539,
            "id": "/fitnessActivities/284969680",
            "source": "RunKeeper",
            "start_time": "2013-12-29T09:13:12-06:00",
            "type": "Running"
        },
        {
            "distance": 8489.24696516529,
            "duration": 2659.526,
            "id": "/fitnessActivities/284224533",
            "source": "RunKeeper",
            "start_time": "2013-12-27T11:28:56-06:00",
            "type": "Running"
        },
        {
            "distance": 1716.33092118131,
            "duration": 1290.89182776213,
            "id": "/fitnessActivities/284212032",
            "source": "RunKeeper",
            "start_time": "2013-12-27T05:50:59-06:00",
            "type": "Walking"
        },
        {
            "distance": 4211.87901507345,
            "duration": 2430.805,
            "id": "/fitnessActivities/283936067",
            "source": "RunKeeper",
            "start_time": "2013-12-26T12:57:12-06:00",
            "type": "Walking"
        },
        {
            "distance": 4645.30341553617,
            "duration": 3876.57664370537,
            "id": "/fitnessActivities/283186388",
            "source": "RunKeeper",
            "start_time": "2013-12-23T11:46:56-06:00",
            "type": "Walking"
        },
        {
            "distance": 2741.13045178956,
            "duration": 2769.09120154381,
            "id": "/fitnessActivities/283186387",
            "source": "RunKeeper",
            "start_time": "2013-12-20T13:30:01-06:00",
            "type": "Walking"
        },
        {
            "distance": 2436.64456021194,
            "duration": 1788.69451272488,
            "id": "/fitnessActivities/283186386",
            "source": "RunKeeper",
            "start_time": "2013-12-20T11:44:04-06:00",
            "type": "Walking"
        },
        {
            "distance": 8451.2537877315,
            "duration": 2684.33,
            "id": "/fitnessActivities/281949456",
            "source": "RunKeeper",
            "start_time": "2013-12-19T08:56:41-06:00",
            "type": "Running"
        },
        {
            "distance": 1383.82020873709,
            "duration": 1593.00855261087,
            "id": "/fitnessActivities/281800661",
            "source": "RunKeeper",
            "start_time": "2013-12-18T14:05:33-06:00",
            "type": "Walking"
        },
        {
            "distance": 2303.33730419786,
            "duration": 2153.52664792538,
            "id": "/fitnessActivities/281800659",
            "source": "RunKeeper",
            "start_time": "2013-12-18T12:20:32-06:00",
            "type": "Walking"
        },
        {
            "distance": 8558.78354661842,
            "duration": 2589.56,
            "id": "/fitnessActivities/281547020",
            "source": "RunKeeper",
            "start_time": "2013-12-17T18:03:28-06:00",
            "type": "Running"
        },
        {
            "distance": 1319.43886350302,
            "duration": 1598.7470921278,
            "id": "/fitnessActivities/281538014",
            "source": "RunKeeper",
            "start_time": "2013-12-17T15:04:48-06:00",
            "type": "Walking"
        },
        {
            "distance": 12325.0044596428,
            "duration": 4051.086,
            "id": "/fitnessActivities/280516185",
            "source": "RunKeeper",
            "start_time": "2013-12-14T09:36:12-06:00",
            "type": "Running"
        },
        {
            "distance": 3054.70547445905,
            "duration": 2038.79611408711,
            "id": "/fitnessActivities/280321216",
            "source": "RunKeeper",
            "start_time": "2013-12-13T12:57:38-06:00",
            "type": "Walking"
        },
        {
            "distance": 2999.41326031685,
            "duration": 2624.14951580763,
            "id": "/fitnessActivities/280321214",
            "source": "RunKeeper",
            "start_time": "2013-12-13T10:23:29-06:00",
            "type": "Walking"
        },
        {
            "distance": 8385.95950942075,
            "duration": 2756.211,
            "id": "/fitnessActivities/280014408",
            "source": "RunKeeper",
            "start_time": "2013-12-12T11:52:47-06:00",
            "type": "Running"
        },
        {
            "distance": 3533.39971196416,
            "duration": 2360.46122825146,
            "id": "/fitnessActivities/280001251",
            "source": "RunKeeper",
            "start_time": "2013-12-11T14:46:10-06:00",
            "type": "Walking"
        },
        {
            "distance": 8407.16266862752,
            "duration": 2803.79,
            "id": "/fitnessActivities/279409501",
            "source": "RunKeeper",
            "start_time": "2013-12-10T11:12:38-06:00",
            "type": "Running"
        },
        {
            "distance": 871.041729637468,
            "duration": 1461.10533422232,
            "id": "/fitnessActivities/280001247",
            "source": "RunKeeper",
            "start_time": "2013-12-07T17:02:56-06:00",
            "type": "Walking"
        },
        {
            "distance": 1711.02892804438,
            "duration": 2521.23464822769,
            "id": "/fitnessActivities/280001241",
            "source": "RunKeeper",
            "start_time": "2013-12-05T17:05:36-06:00",
            "type": "Walking"
        },
        {
            "distance": 10581.1187758705,
            "duration": 3399.644,
            "id": "/fitnessActivities/276751715",
            "source": "RunKeeper",
            "start_time": "2013-12-02T05:29:17-06:00",
            "type": "Running"
        },
        {
            "distance": 5950.42658771362,
            "duration": 2002.107,
            "id": "/fitnessActivities/275878405",
            "source": "RunKeeper",
            "start_time": "2013-11-29T17:40:59-06:00",
            "type": "Running"
        },
        {
            "distance": 1720.11805913625,
            "duration": 2186.58283096552,
            "id": "/fitnessActivities/276984292",
            "source": "RunKeeper",
            "start_time": "2013-11-27T11:42:30-06:00",
            "type": "Walking"
        },
        {
            "distance": 1492.88978183952,
            "duration": 1109.65002697706,
            "id": "/fitnessActivities/272520311",
            "source": "RunKeeper",
            "start_time": "2013-11-19T22:19:53-06:00",
            "type": "Walking"
        },
        {
            "distance": 1723.9051970912,
            "duration": 1466.99865448475,
            "id": "/fitnessActivities/270649625",
            "source": "RunKeeper",
            "start_time": "2013-11-15T10:51:01-06:00",
            "type": "Walking"
        },
        {
            "distance": 6629.6372004384,
            "duration": 2305.327,
            "id": "/fitnessActivities/270350441",
            "source": "RunKeeper",
            "start_time": "2013-11-14T13:57:40-06:00",
            "type": "Running"
        },
        {
            "distance": 1701.93979695251,
            "duration": 1434.97153139114,
            "id": "/fitnessActivities/270085457",
            "source": "RunKeeper",
            "start_time": "2013-11-13T21:44:11-06:00",
            "type": "Walking"
        },
        {
            "distance": 5434.62720288481,
            "duration": 1731.217,
            "id": "/fitnessActivities/269493118",
            "source": "RunKeeper",
            "start_time": "2013-11-12T11:19:46-06:00",
            "type": "Running"
        },
        {
            "distance": 2970.63101185926,
            "duration": 2227.52005779743,
            "id": "/fitnessActivities/269172248",
            "source": "RunKeeper",
            "start_time": "2013-11-11T14:49:58-06:00",
            "type": "Walking"
        },
        {
            "distance": 2511.62989171987,
            "duration": 1717.79464745521,
            "id": "/fitnessActivities/269057155",
            "source": "RunKeeper",
            "start_time": "2013-11-11T10:33:45-06:00",
            "type": "Walking"
        },
        {
            "distance": 6800.83629582242,
            "duration": 2170,
            "id": "/fitnessActivities/268941977",
            "source": "RunKeeper",
            "start_time": "2013-11-11T05:39:19-06:00",
            "type": "Running"
        },
        {
            "distance": 5417.67546275357,
            "duration": 1812.079,
            "id": "/fitnessActivities/266662989",
            "source": "RunKeeper",
            "start_time": "2013-11-05T13:14:39-06:00",
            "type": "Running"
        },
        {
            "distance": 3027.43373489959,
            "duration": 1985.635,
            "id": "/fitnessActivities/266260459",
            "source": "RunKeeper",
            "start_time": "2013-11-04T14:29:01-06:00",
            "type": "Walking"
        },
        {
            "distance": 2343.66697536628,
            "duration": 1830.85,
            "id": "/fitnessActivities/263688559",
            "source": "RunKeeper",
            "start_time": "2013-10-29T12:20:05-05:00",
            "type": "Walking"
        },
        {
            "distance": 1534.66400204107,
            "duration": 988.469,
            "id": "/fitnessActivities/263213491",
            "source": "RunKeeper",
            "start_time": "2013-10-28T11:37:59-05:00",
            "type": "Walking"
        },
        {
            "distance": 1933.47402767427,
            "duration": 1297.747,
            "id": "/fitnessActivities/261966421",
            "source": "RunKeeper",
            "start_time": "2013-10-25T11:45:10-05:00",
            "type": "Walking"
        },
        {
            "distance": 1543.89540794699,
            "duration": 987.742,
            "id": "/fitnessActivities/261614262",
            "source": "RunKeeper",
            "start_time": "2013-10-24T13:21:21-05:00",
            "type": "Walking"
        },
        {
            "distance": 1576.82781551511,
            "duration": 1044.295,
            "id": "/fitnessActivities/261420301",
            "source": "RunKeeper",
            "start_time": "2013-10-24T05:24:57-05:00",
            "type": "Walking"
        },
        {
            "distance": 1632.90224662326,
            "duration": 1117.609,
            "id": "/fitnessActivities/260201285",
            "source": "RunKeeper",
            "start_time": "2013-10-21T12:40:07-05:00",
            "type": "Walking"
        },
        {
            "distance": 33796.224,
            "duration": 4500,
            "id": "/fitnessActivities/260045278",
            "source": "RunKeeper",
            "start_time": "2013-10-19T13:00:55-05:00",
            "type": "Cycling"
        },
        {
            "distance": 4099.80947514741,
            "duration": 3358.1,
            "id": "/fitnessActivities/258842864",
            "source": "RunKeeper",
            "start_time": "2013-10-18T10:44:57-05:00",
            "type": "Walking"
        },
        {
            "distance": 2361.92267482493,
            "duration": 1475.096,
            "id": "/fitnessActivities/257040866",
            "source": "RunKeeper",
            "start_time": "2013-10-14T14:11:31-05:00",
            "type": "Walking"
        },
        {
            "distance": 2177.6678540145,
            "duration": 1438.876,
            "id": "/fitnessActivities/256973418",
            "source": "RunKeeper",
            "start_time": "2013-10-14T11:57:20-05:00",
            "type": "Walking"
        },
        {
            "distance": 2870.06857665029,
            "duration": 1799.449,
            "id": "/fitnessActivities/254076130",
            "source": "RunKeeper",
            "start_time": "2013-10-08T11:24:37-05:00",
            "type": "Walking"
        },
        {
            "distance": 2559.19773611216,
            "duration": 1569.422,
            "id": "/fitnessActivities/246174546",
            "source": "RunKeeper",
            "start_time": "2013-09-23T05:32:30-05:00",
            "type": "Walking"
        },
        {
            "distance": 3021.56075653615,
            "duration": 1915.84,
            "id": "/fitnessActivities/243364928",
            "source": "RunKeeper",
            "start_time": "2013-09-17T12:27:01-05:00",
            "type": "Walking"
        },
        {
            "distance": 2956.66520504818,
            "duration": 1864.691,
            "id": "/fitnessActivities/242843478",
            "source": "RunKeeper",
            "start_time": "2013-09-16T12:33:10-05:00",
            "type": "Walking"
        },
        {
            "distance": 4192.95946348361,
            "duration": 2441.704,
            "id": "/fitnessActivities/240164168",
            "source": "RunKeeper",
            "start_time": "2013-09-11T05:10:54-05:00",
            "type": "Walking"
        },
        {
            "distance": 3618.73326127883,
            "duration": 2253.386,
            "id": "/fitnessActivities/239081353",
            "source": "RunKeeper",
            "start_time": "2013-09-09T05:20:29-05:00",
            "type": "Walking"
        },
        {
            "distance": 1629.01760224231,
            "duration": 1012.608,
            "id": "/fitnessActivities/232741238",
            "source": "RunKeeper",
            "start_time": "2013-08-28T05:28:12-05:00",
            "type": "Walking"
        },
        {
            "distance": 1578.94089867237,
            "duration": 1146.956,
            "id": "/fitnessActivities/232133959",
            "source": "RunKeeper",
            "start_time": "2013-08-27T05:30:55-05:00",
            "type": "Walking"
        },
        {
            "distance": 3212.65703122626,
            "duration": 2047.182,
            "id": "/fitnessActivities/231522413",
            "source": "RunKeeper",
            "start_time": "2013-08-26T05:03:37-05:00",
            "type": "Walking"
        },
        {
            "distance": 1638.35382820415,
            "duration": 1093.394,
            "id": "/fitnessActivities/229999181",
            "source": "RunKeeper",
            "start_time": "2013-08-23T05:58:06-05:00",
            "type": "Walking"
        },
        {
            "distance": 4258.31736305435,
            "duration": 2526.683,
            "id": "/fitnessActivities/229086727",
            "source": "RunKeeper",
            "start_time": "2013-08-21T11:52:39-05:00",
            "type": "Walking"
        },
        {
            "distance": 0,
            "duration": 0,
            "id": "/fitnessActivities/229055103",
            "source": "RunKeeper",
            "start_time": "2013-08-21T11:50:57-05:00",
            "type": "Walking"
        },
        {
            "distance": 3242.3943188587,
            "duration": 1949.61,
            "id": "/fitnessActivities/228261161",
            "source": "RunKeeper",
            "start_time": "2013-08-20T05:50:03-05:00",
            "type": "Walking"
        },
        {
            "distance": 1500.97920671805,
            "duration": 907.064,
            "id": "/fitnessActivities/225144928",
            "source": "RunKeeper",
            "start_time": "2013-08-14T10:40:54-05:00",
            "type": "Walking"
        },
        {
            "distance": 1469.86891418285,
            "duration": 884.705,
            "id": "/fitnessActivities/225007519",
            "source": "RunKeeper",
            "start_time": "2013-08-14T06:09:10-05:00",
            "type": "Walking"
        },
        {
            "distance": 1578.89844526003,
            "duration": 1031.583,
            "id": "/fitnessActivities/224425831",
            "source": "RunKeeper",
            "start_time": "2013-08-13T05:24:54-05:00",
            "type": "Walking"
        },
        {
            "distance": 1596.24617029158,
            "duration": 988.276,
            "id": "/fitnessActivities/220665377",
            "source": "RunKeeper",
            "start_time": "2013-08-06T06:15:39-05:00",
            "type": "Walking"
        },
        {
            "distance": 2451.19281953025,
            "duration": 1717.531,
            "id": "/fitnessActivities/218742826",
            "source": "RunKeeper",
            "start_time": "2013-08-02T12:29:26-05:00",
            "type": "Walking"
        },
        {
            "distance": 1528.14847539287,
            "duration": 1014.679,
            "id": "/fitnessActivities/218561657",
            "source": "RunKeeper",
            "start_time": "2013-08-02T05:37:45-05:00",
            "type": "Walking"
        },
        {
            "distance": 3074.42753193309,
            "duration": 1764.112,
            "id": "/fitnessActivities/218221955",
            "source": "RunKeeper",
            "start_time": "2013-08-01T11:57:29-05:00",
            "type": "Walking"
        },
        {
            "distance": 8765.42135848435,
            "duration": 2818.78,
            "id": "/fitnessActivities/218025164",
            "source": "RunKeeper",
            "start_time": "2013-08-01T04:40:31-05:00",
            "type": "Running"
        },
        {
            "distance": 1434.57978214819,
            "duration": 922.528,
            "id": "/fitnessActivities/218008589",
            "source": "RunKeeper",
            "start_time": "2013-08-01T04:23:55-05:00",
            "type": "Walking"
        },
        {
            "distance": 3018.60593801574,
            "duration": 1750.455,
            "id": "/fitnessActivities/217784354",
            "source": "RunKeeper",
            "start_time": "2013-07-31T15:48:11-05:00",
            "type": "Walking"
        },
        {
            "distance": 3061.34007942162,
            "duration": 1807.975,
            "id": "/fitnessActivities/217076356",
            "source": "RunKeeper",
            "start_time": "2013-07-30T11:46:04-05:00",
            "type": "Walking"
        },
        {
            "distance": 8759.37059821138,
            "duration": 2733.833,
            "id": "/fitnessActivities/214899670",
            "source": "RunKeeper",
            "start_time": "2013-07-26T05:47:47-05:00",
            "type": "Running"
        },
        {
            "distance": 3086.56726772034,
            "duration": 1867.957,
            "id": "/fitnessActivities/214393920",
            "source": "RunKeeper",
            "start_time": "2013-07-25T06:16:59-05:00",
            "type": "Walking"
        },
        {
            "distance": 3024.94510772026,
            "duration": 1796.93,
            "id": "/fitnessActivities/213843187",
            "source": "RunKeeper",
            "start_time": "2013-07-24T06:36:59-05:00",
            "type": "Walking"
        },
        {
            "distance": 1593.30053106483,
            "duration": 1019,
            "id": "/fitnessActivities/212691344",
            "source": "RunKeeper",
            "start_time": "2013-07-22T05:28:01-05:00",
            "type": "Walking"
        },
        {
            "distance": 3265.65357758038,
            "duration": 901.803,
            "id": "/fitnessActivities/211275487",
            "source": "RunKeeper",
            "start_time": "2013-07-19T05:48:00-05:00",
            "type": "Running"
        },
        {
            "distance": 1644.90394084623,
            "duration": 978.856,
            "id": "/fitnessActivities/211267816",
            "source": "RunKeeper",
            "start_time": "2013-07-19T05:27:28-05:00",
            "type": "Walking"
        },
        {
            "distance": 2526.46573492597,
            "duration": 1475.759,
            "id": "/fitnessActivities/211019233",
            "source": "RunKeeper",
            "start_time": "2013-07-18T14:02:37-05:00",
            "type": "Walking"
        },
        {
            "distance": 1563.64071979061,
            "duration": 1004.218,
            "id": "/fitnessActivities/210794361",
            "source": "RunKeeper",
            "start_time": "2013-07-18T05:45:20-05:00",
            "type": "Walking"
        },
        {
            "distance": 2951.84278852107,
            "duration": 1911.648,
            "id": "/fitnessActivities/209988679",
            "source": "RunKeeper",
            "start_time": "2013-07-16T14:17:02-05:00",
            "type": "Walking"
        },
        {
            "distance": 5648.94211130433,
            "duration": 1714.699,
            "id": "/fitnessActivities/209187029",
            "source": "RunKeeper",
            "start_time": "2013-07-15T05:32:12-05:00",
            "type": "Running"
        },
        {
            "distance": 3085.6389991039,
            "duration": 1879.444,
            "id": "/fitnessActivities/207973857",
            "source": "RunKeeper",
            "start_time": "2013-07-12T12:09:17-05:00",
            "type": "Walking"
        },
        {
            "distance": 3131.55494894258,
            "duration": 1963.531,
            "id": "/fitnessActivities/207816545",
            "source": "RunKeeper",
            "start_time": "2013-07-12T05:41:50-05:00",
            "type": "Walking"
        },
        {
            "distance": 2974.16253955926,
            "duration": 1800.756,
            "id": "/fitnessActivities/207489326",
            "source": "RunKeeper",
            "start_time": "2013-07-11T12:12:59-05:00",
            "type": "Walking"
        },
        {
            "distance": 7094.63516025674,
            "duration": 2238.597,
            "id": "/fitnessActivities/207299382",
            "source": "RunKeeper",
            "start_time": "2013-07-11T05:23:40-05:00",
            "type": "Running"
        },
        {
            "distance": 1506.63100892122,
            "duration": 971.121,
            "id": "/fitnessActivities/206367969",
            "source": "RunKeeper",
            "start_time": "2013-07-09T11:01:41-05:00",
            "type": "Walking"
        },
        {
            "distance": 10531.1610622315,
            "duration": 3398.839,
            "id": "/fitnessActivities/206229076",
            "source": "RunKeeper",
            "start_time": "2013-07-09T05:29:35-05:00",
            "type": "Running"
        },
        {
            "distance": 6569.48451761269,
            "duration": 2158.14,
            "id": "/fitnessActivities/204780823",
            "source": "RunKeeper",
            "start_time": "2013-07-06T06:29:03-05:00",
            "type": "Running"
        },
        {
            "distance": 3580.43740453043,
            "duration": 2055.57,
            "id": "/fitnessActivities/204539025",
            "source": "RunKeeper",
            "start_time": "2013-07-05T14:23:09-05:00",
            "type": "Walking"
        },
        {
            "distance": 3025.87706081169,
            "duration": 1953.19,
            "id": "/fitnessActivities/203542063",
            "source": "RunKeeper",
            "start_time": "2013-07-03T11:34:34-05:00",
            "type": "Walking"
        },
        {
            "distance": 8780.36179207467,
            "duration": 2815.843,
            "id": "/fitnessActivities/200589327",
            "source": "RunKeeper",
            "start_time": "2013-06-27T05:25:06-05:00",
            "type": "Running"
        },
        {
            "distance": 3043.40524238238,
            "duration": 1786.517,
            "id": "/fitnessActivities/199296706",
            "source": "RunKeeper",
            "start_time": "2013-06-24T12:49:25-05:00",
            "type": "Walking"
        },
        {
            "distance": 3184.96235198061,
            "duration": 860.671,
            "id": "/fitnessActivities/196751245",
            "source": "RunKeeper",
            "start_time": "2013-06-18T18:21:34-05:00",
            "type": "Cycling"
        },
        {
            "distance": 8773.55727389827,
            "duration": 2822.516,
            "id": "/fitnessActivities/196415593",
            "source": "RunKeeper",
            "start_time": "2013-06-18T05:13:51-05:00",
            "type": "Running"
        },
        {
            "distance": 3075.70641229791,
            "duration": 1987.841,
            "id": "/fitnessActivities/196169588",
            "source": "RunKeeper",
            "start_time": "2013-06-17T15:01:35-05:00",
            "type": "Walking"
        },
        {
            "distance": 12198.6668439683,
            "duration": 2239.325,
            "id": "/fitnessActivities/196096480",
            "source": "RunKeeper",
            "start_time": "2013-06-17T12:46:03-05:00",
            "type": "Cycling"
        },
        {
            "distance": 4244.06728505137,
            "duration": 2505.895,
            "id": "/fitnessActivities/196065076",
            "source": "RunKeeper",
            "start_time": "2013-06-17T11:55:17-05:00",
            "type": "Walking"
        },
        {
            "distance": 4954.31180329142,
            "duration": 2308.801,
            "id": "/fitnessActivities/195250895",
            "source": "RunKeeper",
            "start_time": "2013-06-15T15:01:25-05:00",
            "type": "Cycling"
        },
        {
            "distance": 8433.2061084154,
            "duration": 2722.178,
            "id": "/fitnessActivities/195192240",
            "source": "RunKeeper",
            "start_time": "2013-06-15T11:39:54-05:00",
            "type": "Running"
        },
        {
            "distance": 8395.68331261951,
            "duration": 2753.272,
            "id": "/fitnessActivities/194301680",
            "source": "RunKeeper",
            "start_time": "2013-06-13T09:46:38-05:00",
            "type": "Running"
        },
        {
            "distance": 1412.91702036155,
            "duration": 1018.354,
            "id": "/fitnessActivities/193904370",
            "source": "RunKeeper",
            "start_time": "2013-06-12T11:52:37-05:00",
            "type": "Walking"
        },
        {
            "distance": 3770.81643952238,
            "duration": 2306.798,
            "id": "/fitnessActivities/193456369",
            "source": "RunKeeper",
            "start_time": "2013-06-11T13:16:08-05:00",
            "type": "Walking"
        },
        {
            "distance": 2042.98680979503,
            "duration": 1201.223,
            "id": "/fitnessActivities/193339898",
            "source": "RunKeeper",
            "start_time": "2013-06-11T10:21:56-05:00",
            "type": "Walking"
        },
        {
            "distance": 2948.88302041939,
            "duration": 1820.2,
            "id": "/fitnessActivities/191623387",
            "source": "RunKeeper",
            "start_time": "2013-06-07T15:33:59-05:00",
            "type": "Walking"
        },
        {
            "distance": 1345.72756347716,
            "duration": 938.657,
            "id": "/fitnessActivities/191547661",
            "source": "RunKeeper",
            "start_time": "2013-06-07T11:33:13-05:00",
            "type": "Walking"
        },
        {
            "distance": 3114.16111025531,
            "duration": 1871.333,
            "id": "/fitnessActivities/191414996",
            "source": "RunKeeper",
            "start_time": "2013-06-07T05:07:25-05:00",
            "type": "Walking"
        },
        {
            "distance": 4664.91975660488,
            "duration": 1565.967,
            "id": "/fitnessActivities/191185267",
            "source": "RunKeeper",
            "start_time": "2013-06-06T13:56:26-05:00",
            "type": "Running"
        },
        {
            "distance": 3120.84283472365,
            "duration": 1804.526,
            "id": "/fitnessActivities/191099955",
            "source": "RunKeeper",
            "start_time": "2013-06-06T11:10:17-05:00",
            "type": "Walking"
        },
        {
            "distance": 3055.54191952526,
            "duration": 1804.926,
            "id": "/fitnessActivities/190645031",
            "source": "RunKeeper",
            "start_time": "2013-06-05T12:43:56-05:00",
            "type": "Walking"
        },
        {
            "distance": 1544.31394600056,
            "duration": 919.163,
            "id": "/fitnessActivities/190574516",
            "source": "RunKeeper",
            "start_time": "2013-06-05T10:51:16-05:00",
            "type": "Walking"
        },
        {
            "distance": 9745.946884155273,
            "duration": 3062.846,
            "id": "19824453000",
            "source": "Nike+",
            "start_time": "2013-06-04T05:25:32-05:00",
            "type": "RUN"
        },
        {
            "distance": 707.6051831245422,
            "duration": 283.301,
            "id": "14566813000",
            "source": "Nike+",
            "start_time": "2013-05-28T04:21:57-05:00",
            "type": "RUN"
        },
        {
            "distance": 5179.483413696289,
            "duration": 1830.701,
            "id": "13478267000",
            "source": "Nike+",
            "start_time": "2013-05-26T13:57:00-05:00",
            "type": "RUN"
        },
        {
            "distance": 5321.541309356689,
            "duration": 1858.56,
            "id": "11663860000",
            "source": "Nike+",
            "start_time": "2013-05-23T11:20:16-05:00",
            "type": "RUN"
        },
        {
            "distance": 502.5786757469177,
            "duration": 195.334,
            "id": "10470033000",
            "source": "Nike+",
            "start_time": "2013-05-21T11:10:08-05:00",
            "type": "RUN"
        },
        {
            "distance": 8475.41618347168,
            "duration": 2778.319,
            "id": "2414420000",
            "source": "Nike+",
            "start_time": "2013-05-08T11:03:26-05:00",
            "type": "RUN"
        },
        {
            "distance": 8423.727989196777,
            "duration": 2817.821,
            "id": "2141470281",
            "source": "Nike+",
            "start_time": "2013-05-06T08:24:10-05:00",
            "type": "RUN"
        },
        {
            "distance": 8434.823989868164,
            "duration": 2685.12,
            "id": "2137950376",
            "source": "Nike+",
            "start_time": "2013-04-30T09:22:45-05:00",
            "type": "RUN"
        },
        {
            "distance": 8416.766166687012,
            "duration": 2850.351,
            "id": "2135660943",
            "source": "Nike+",
            "start_time": "2013-04-26T10:41:46-05:00",
            "type": "RUN"
        },
        {
            "distance": 8489.533424377441,
            "duration": 2997.494,
            "id": "2134006916",
            "source": "Nike+",
            "start_time": "2013-04-23T11:34:50-05:00",
            "type": "RUN"
        },
        {
            "distance": 8499.288558959961,
            "duration": 2701.09,
            "id": "2126502909",
            "source": "Nike+",
            "start_time": "2013-04-09T09:31:18-05:00",
            "type": "RUN"
        },
        {
            "distance": 8520.255088806152,
            "duration": 2790.458,
            "id": "2124377131",
            "source": "Nike+",
            "start_time": "2013-04-05T11:24:42-05:00",
            "type": "RUN"
        },
        {
            "distance": 8465.598106384277,
            "duration": 2774.881,
            "id": "2116433644",
            "source": "Nike+",
            "start_time": "2013-03-19T10:03:42-05:00",
            "type": "RUN"
        },
        {
            "distance": 7143.534183502197,
            "duration": 2450.819,
            "id": "2109538055",
            "source": "Nike+",
            "start_time": "2013-03-04T04:54:17-06:00",
            "type": "RUN"
        },
        {
            "distance": 6555.014133453369,
            "duration": 2204.123,
            "id": "2103624826",
            "source": "Nike+",
            "start_time": "2013-02-18T08:31:20-06:00",
            "type": "RUN"
        },
        {
            "distance": 6530.484676361084,
            "duration": 2148.536,
            "id": "2100682274",
            "source": "Nike+",
            "start_time": "2013-02-11T11:09:48-06:00",
            "type": "RUN"
        },
        {
            "distance": 8452.425003051758,
            "duration": 2686.352,
            "id": "2097661388",
            "source": "Nike+",
            "start_time": "2013-02-04T08:45:55-06:00",
            "type": "RUN"
        },
        {
            "distance": 8477.05078125,
            "duration": 2623.446,
            "id": "2096404440",
            "source": "Nike+",
            "start_time": "2013-02-01T11:26:33-06:00",
            "type": "RUN"
        },
        {
            "distance": 7274.327278137207,
            "duration": 2369.468,
            "id": "2094545422",
            "source": "Nike+",
            "start_time": "2013-01-28T04:48:51-06:00",
            "type": "RUN"
        },
        {
            "distance": 6659.938812255859,
            "duration": 2151.829,
            "id": "2089651133",
            "source": "Nike+",
            "start_time": "2013-01-16T11:37:17-06:00",
            "type": "RUN"
        },
        {
            "distance": 8555.246353149414,
            "duration": 3577.822,
            "id": "2087740573",
            "source": "Nike+",
            "start_time": "2013-01-12T07:18:00-06:00",
            "type": "RUN"
        },
        {
            "distance": 6606.751441955566,
            "duration": 2103.861,
            "id": "2086952017",
            "source": "Nike+",
            "start_time": "2013-01-10T10:27:48-06:00",
            "type": "RUN"
        },
        {
            "distance": 5691.709995269775,
            "duration": 1896.602,
            "id": "2085476020",
            "source": "Nike+",
            "start_time": "2013-01-07T05:20:09-06:00",
            "type": "RUN"
        },
        {
            "distance": 8408.193588256836,
            "duration": 2764.11,
            "id": "2083797325",
            "source": "Nike+",
            "start_time": "2013-01-03T10:42:13-06:00",
            "type": "RUN"
        },
        {
            "distance": 8737.156867980957,
            "duration": 2726.964,
            "id": "2078156480",
            "source": "Nike+",
            "start_time": "2012-12-18T09:43:36-06:00",
            "type": "RUN"
        },
        {
            "distance": 6586.752891540527,
            "duration": 2009.501,
            "id": "2073505564",
            "source": "Nike+",
            "start_time": "2012-12-04T11:06:45-06:00",
            "type": "RUN"
        },
        {
            "distance": 7046.111106872559,
            "duration": 2274.346,
            "id": "2072223488",
            "source": "Nike+",
            "start_time": "2012-12-01T05:34:53-06:00",
            "type": "RUN"
        },
        {
            "distance": 5732.806205749512,
            "duration": 1816.253,
            "id": "2070080016",
            "source": "Nike+",
            "start_time": "2012-11-25T06:00:46-06:00",
            "type": "RUN"
        },
        {
            "distance": 5671.9770431518555,
            "duration": 1705.994,
            "id": "2062317636",
            "source": "Nike+",
            "start_time": "2012-11-05T04:15:09-06:00",
            "type": "RUN"
        },
        {
            "distance": 5660.167217254639,
            "duration": 1789.085,
            "id": "2056670627",
            "source": "Nike+",
            "start_time": "2012-10-22T04:39:32-05:00",
            "type": "RUN"
        },
        {
            "distance": 6052.941799163818,
            "duration": 2749.681,
            "id": "2052047030",
            "source": "Nike+",
            "start_time": "2012-10-11T06:54:12-05:00",
            "type": "RUN"
        },
        {
            "distance": 5667.069911956787,
            "duration": 1722.528,
            "id": "2048477714",
            "source": "Nike+",
            "start_time": "2012-10-03T04:31:45-05:00",
            "type": "RUN"
        },
        {
            "distance": 4513.1402015686035,
            "duration": 1337.773,
            "id": "2048374960",
            "source": "Nike+",
            "start_time": "2012-10-02T20:22:28-05:00",
            "type": "RUN"
        },
        {
            "distance": 5645.686626434326,
            "duration": 1721.291,
            "id": "2047563411",
            "source": "Nike+",
            "start_time": "2012-10-01T04:29:31-05:00",
            "type": "RUN"
        },
        {
            "distance": 7113.2330894470215,
            "duration": 2163.473,
            "id": "2037750874",
            "source": "Nike+",
            "start_time": "2012-09-10T04:44:33-05:00",
            "type": "RUN"
        },
        {
            "distance": 6450.179100036621,
            "duration": 1984.772,
            "id": "2036348988",
            "source": "Nike+",
            "start_time": "2012-09-07T04:49:58-05:00",
            "type": "RUN"
        },
        {
            "distance": 5660.025596618652,
            "duration": 1644.424,
            "id": "2035417630",
            "source": "Nike+",
            "start_time": "2012-09-05T04:48:34-05:00",
            "type": "RUN"
        },
        {
            "distance": 7027.469158172607,
            "duration": 2133.462,
            "id": "2034451062",
            "source": "Nike+",
            "start_time": "2012-09-03T05:59:17-05:00",
            "type": "RUN"
        },
        {
            "distance": 7045.767784118652,
            "duration": 2111.664,
            "id": "2031537339",
            "source": "Nike+",
            "start_time": "2012-08-28T04:40:23-05:00",
            "type": "RUN"
        },
        {
            "distance": 6477.609634399414,
            "duration": 1958.112,
            "id": "2028356374",
            "source": "Nike+",
            "start_time": "2012-08-21T04:09:36-05:00",
            "type": "RUN"
        },
        {
            "distance": 5656.844139099121,
            "duration": 1709.789,
            "id": "2025681410",
            "source": "Nike+",
            "start_time": "2012-08-15T04:13:55-05:00",
            "type": "RUN"
        },
        {
            "distance": 7056.625843048096,
            "duration": 2079.399,
            "id": "2012786329",
            "source": "Nike+",
            "start_time": "2012-07-16T04:10:48-05:00",
            "type": "RUN"
        },
        {
            "distance": 5642.267227172852,
            "duration": 1621.956,
            "id": "2011670630",
            "source": "Nike+",
            "start_time": "2012-07-13T04:11:31-05:00",
            "type": "RUN"
        },
        {
            "distance": 11081.717491149902,
            "duration": 3505.621,
            "id": "2010027622",
            "source": "Nike+",
            "start_time": "2012-07-09T04:11:15-05:00",
            "type": "RUN"
        },
        {
            "distance": 10539.409637451172,
            "duration": 3183.093,
            "id": "2008865544",
            "source": "Nike+",
            "start_time": "2012-07-06T04:13:27-05:00",
            "type": "RUN"
        },
        {
            "distance": 6489.523410797119,
            "duration": 2155.191,
            "id": "2007502817",
            "source": "Nike+",
            "start_time": "2012-07-02T08:53:46-05:00",
            "type": "RUN"
        },
        {
            "distance": 8172.443389892578,
            "duration": 2545.922,
            "id": "2007120096",
            "source": "Nike+",
            "start_time": "2012-07-01T08:25:32-05:00",
            "type": "RUN"
        },
        {
            "distance": 5215.235233306885,
            "duration": 1727.636,
            "id": "2006778983",
            "source": "Nike+",
            "start_time": "2012-06-30T10:51:50-05:00",
            "type": "RUN"
        },
        {
            "distance": 7059.1139793396,
            "duration": 2260.201,
            "id": "2004511121",
            "source": "Nike+",
            "start_time": "2012-06-25T04:10:25-05:00",
            "type": "RUN"
        },
        {
            "distance": 5958.9996337890625,
            "duration": 1877.806,
            "id": "2004106686",
            "source": "Nike+",
            "start_time": "2012-06-24T06:00:47-05:00",
            "type": "RUN"
        },
        {
            "distance": 10354.775428771973,
            "duration": 2532.482,
            "id": "5000191226",
            "source": "Nike+",
            "start_time": "2012-06-12T07:44:28-05:00",
            "type": "RUN"
        },
        {
            "distance": 8804.644584655762,
            "duration": 2688.615,
            "id": "101685508",
            "source": "Nike+",
            "start_time": "2012-06-08T04:40:37-05:00",
            "type": "RUN"
        },
        {
            "distance": 6475.375175476074,
            "duration": 2068.614,
            "id": "100916898",
            "source": "Nike+",
            "start_time": "2012-06-06T04:10:15-05:00",
            "type": "RUN"
        },
        {
            "distance": 8747.754096984863,
            "duration": 2718.295,
            "id": "900689855",
            "source": "Nike+",
            "start_time": "2012-06-04T04:01:08-05:00",
            "type": "RUN"
        },
        {
            "distance": 8780.597686767578,
            "duration": 2722.87,
            "id": "898953294",
            "source": "Nike+",
            "start_time": "2012-05-30T04:10:30-05:00",
            "type": "RUN"
        },
        {
            "distance": 8193.448066711426,
            "duration": 2512.767,
            "id": "894420871",
            "source": "Nike+",
            "start_time": "2012-05-21T04:19:14-05:00",
            "type": "RUN"
        },
        {
            "distance": 11106.951713562012,
            "duration": 3236.29,
            "id": "890130771",
            "source": "Nike+",
            "start_time": "2012-05-14T04:13:11-05:00",
            "type": "RUN"
        },
        {
            "distance": 5656.2180519104,
            "duration": 1733.65,
            "id": "864801571",
            "source": "Nike+",
            "start_time": "2012-04-05T04:18:42-05:00",
            "type": "RUN"
        },
        {
            "distance": 5641.323089599609,
            "duration": 1877.224,
            "id": "848425824",
            "source": "Nike+",
            "start_time": "2012-03-16T04:13:10-05:00",
            "type": "RUN"
        },
        {
            "distance": 8795.790672302246,
            "duration": 2718.678,
            "id": "848504200",
            "source": "Nike+",
            "start_time": "2012-03-14T04:20:30-05:00",
            "type": "RUN"
        },
        {
            "distance": 11078.556060791016,
            "duration": 3375.928,
            "id": "843939940",
            "source": "Nike+",
            "start_time": "2012-03-13T04:10:04-05:00",
            "type": "RUN"
        },
        {
            "distance": 8469.029426574707,
            "duration": 2648.207,
            "id": "841555106",
            "source": "Nike+",
            "start_time": "2012-03-09T04:30:26-06:00",
            "type": "RUN"
        },
        {
            "distance": 8772.807121276855,
            "duration": 2548.839,
            "id": "841113449",
            "source": "Nike+",
            "start_time": "2012-03-07T04:43:15-06:00",
            "type": "RUN"
        },
        {
            "distance": 6669.323921203613,
            "duration": 2108.163,
            "id": "839236175",
            "source": "Nike+",
            "start_time": "2012-03-05T04:46:45-06:00",
            "type": "RUN"
        },
        {
            "distance": 11090.067863464355,
            "duration": 3354.354,
            "id": "837031178",
            "source": "Nike+",
            "start_time": "2012-02-29T04:14:05-06:00",
            "type": "RUN"
        },
        {
            "distance": 7090.771198272705,
            "duration": 2187.446,
            "id": "836608308",
            "source": "Nike+",
            "start_time": "2012-02-27T04:10:39-06:00",
            "type": "RUN"
        },
        {
            "distance": 11101.164817810059,
            "duration": 3225.038,
            "id": "832075396",
            "source": "Nike+",
            "start_time": "2012-02-21T04:17:43-06:00",
            "type": "RUN"
        },
        {
            "distance": 8175.145149230957,
            "duration": 2473.769,
            "id": "829184780",
            "source": "Nike+",
            "start_time": "2012-02-15T04:31:40-06:00",
            "type": "RUN"
        },
        {
            "distance": 5665.531158447266,
            "duration": 1702.285,
            "id": "829416655",
            "source": "Nike+",
            "start_time": "2012-02-13T04:42:58-06:00",
            "type": "RUN"
        },
        {
            "distance": 11068.12572479248,
            "duration": 3470.04,
            "id": "827819658",
            "source": "Nike+",
            "start_time": "2012-02-08T04:32:06-06:00",
            "type": "RUN"
        },
        {
            "distance": 6689.11600112915,
            "duration": 1894.889,
            "id": "826576404",
            "source": "Nike+",
            "start_time": "2012-02-06T04:33:00-06:00",
            "type": "RUN"
        },
        {
            "distance": 6606.136798858643,
            "duration": 2109.024,
            "id": "822306950",
            "source": "Nike+",
            "start_time": "2012-02-01T04:33:53-06:00",
            "type": "RUN"
        },
        {
            "distance": 6682.278156280518,
            "duration": 2034.769,
            "id": "821056896",
            "source": "Nike+",
            "start_time": "2012-01-30T04:14:43-06:00",
            "type": "RUN"
        },
        {
            "distance": 6659.213066101074,
            "duration": 2118.261,
            "id": "816680869",
            "source": "Nike+",
            "start_time": "2012-01-24T04:12:20-06:00",
            "type": "RUN"
        },
        {
            "distance": 6475.381851196289,
            "duration": 1997.483,
            "id": "817102376",
            "source": "Nike+",
            "start_time": "2012-01-20T04:20:15-06:00",
            "type": "RUN"
        },
        {
            "distance": 9799.967765808105,
            "duration": 2981.228,
            "id": "816022872",
            "source": "Nike+",
            "start_time": "2012-01-18T04:13:10-06:00",
            "type": "RUN"
        },
        {
            "distance": 5624.657154083252,
            "duration": 1815.273,
            "id": "813583071",
            "source": "Nike+",
            "start_time": "2012-01-16T04:15:48-06:00",
            "type": "RUN"
        },
        {
            "distance": 5644.597053527832,
            "duration": 1775.266,
            "id": "810252622",
            "source": "Nike+",
            "start_time": "2012-01-11T04:32:11-06:00",
            "type": "RUN"
        },
        {
            "distance": 7050.47082901001,
            "duration": 2132.681,
            "id": "809559915",
            "source": "Nike+",
            "start_time": "2012-01-10T04:27:08-06:00",
            "type": "RUN"
        },
        {
            "distance": 5660.062789916992,
            "duration": 1829.944,
            "id": "801528032",
            "source": "Nike+",
            "start_time": "2012-01-06T04:23:27-06:00",
            "type": "RUN"
        },
        {
            "distance": 6635.799884796143,
            "duration": 2040.797,
            "id": "800798247",
            "source": "Nike+",
            "start_time": "2012-01-05T04:22:52-06:00",
            "type": "RUN"
        },
        {
            "distance": 5646.1639404296875,
            "duration": 1830.786,
            "id": "800936130",
            "source": "Nike+",
            "start_time": "2012-01-03T04:30:25-06:00",
            "type": "RUN"
        },
        {
            "distance": 5664.389133453369,
            "duration": 1816,
            "id": "797364936",
            "source": "Nike+",
            "start_time": "2011-12-28T04:42:52-06:00",
            "type": "RUN"
        },
        {
            "distance": 6354.977130889893,
            "duration": 2097.742,
            "id": "788611892",
            "source": "Nike+",
            "start_time": "2011-12-12T04:18:04-06:00",
            "type": "RUN"
        },
        {
            "distance": 7067.729949951172,
            "duration": 2249.371,
            "id": "782831685",
            "source": "Nike+",
            "start_time": "2011-11-23T04:39:07-06:00",
            "type": "RUN"
        },
        {
            "distance": 7108.036041259766,
            "duration": 2280.885,
            "id": "781783544",
            "source": "Nike+",
            "start_time": "2011-11-21T04:16:17-06:00",
            "type": "RUN"
        },
        {
            "distance": 7096.839904785156,
            "duration": 2222.923,
            "id": "778536323",
            "source": "Nike+",
            "start_time": "2011-11-10T04:16:57-06:00",
            "type": "RUN"
        },
        {
            "distance": 11064.240455627441,
            "duration": 3478.756,
            "id": "777402824",
            "source": "Nike+",
            "start_time": "2011-11-08T04:25:42-06:00",
            "type": "RUN"
        },
        {
            "distance": 8719.525337219238,
            "duration": 2624.956,
            "id": "773311827",
            "source": "Nike+",
            "start_time": "2011-10-31T04:24:47-05:00",
            "type": "RUN"
        },
        {
            "distance": 8110.73112487793,
            "duration": 2612.26,
            "id": "770129481",
            "source": "Nike+",
            "start_time": "2011-10-26T04:21:19-05:00",
            "type": "RUN"
        },
        {
            "distance": 9801.66244506836,
            "duration": 3136.893,
            "id": "768219258",
            "source": "Nike+",
            "start_time": "2011-10-24T04:22:25-05:00",
            "type": "RUN"
        },
        {
            "distance": 8654.57820892334,
            "duration": 2659.448,
            "id": "766539149",
            "source": "Nike+",
            "start_time": "2011-10-21T04:28:54-05:00",
            "type": "RUN"
        },
        {
            "distance": 7536.561012268066,
            "duration": 2433.93,
            "id": "764591779",
            "source": "Nike+",
            "start_time": "2011-10-17T04:14:05-05:00",
            "type": "RUN"
        },
        {
            "distance": 5557.1608543396,
            "duration": 1860.851,
            "id": "762945255",
            "source": "Nike+",
            "start_time": "2011-10-12T04:24:23-05:00",
            "type": "RUN"
        },
        {
            "distance": 6957.38410949707,
            "duration": 2286.545,
            "id": "762416929",
            "source": "Nike+",
            "start_time": "2011-10-11T04:16:05-05:00",
            "type": "RUN"
        },
        {
            "distance": 6973.299980163574,
            "duration": 2298.607,
            "id": "743417218",
            "source": "Nike+",
            "start_time": "2011-09-06T05:17:39-05:00",
            "type": "RUN"
        },
        {
            "distance": 11410.799980163574,
            "duration": 3873.73,
            "id": "732162985",
            "source": "Nike+",
            "start_time": "2011-08-22T05:09:19-05:00",
            "type": "RUN"
        },
        {
            "distance": 8456.899642944336,
            "duration": 2759.591,
            "id": "724390889",
            "source": "Nike+",
            "start_time": "2011-08-15T05:12:23-05:00",
            "type": "RUN"
        },
        {
            "distance": 6893.099784851074,
            "duration": 2308.311,
            "id": "718897782",
            "source": "Nike+",
            "start_time": "2011-08-01T05:31:28-05:00",
            "type": "RUN"
        },
        {
            "distance": 10691.300392150879,
            "duration": 3546.435,
            "id": "718003209",
            "source": "Nike+",
            "start_time": "2011-07-27T05:25:30-05:00",
            "type": "RUN"
        },
        {
            "distance": 10578.00006866455,
            "duration": 3492.675,
            "id": "715516946",
            "source": "Nike+",
            "start_time": "2011-07-19T05:17:14-05:00",
            "type": "RUN"
        },
        {
            "distance": 8610.199928283691,
            "duration": 2778.364,
            "id": "712841433",
            "source": "Nike+",
            "start_time": "2011-07-14T05:11:35-05:00",
            "type": "RUN"
        },
        {
            "distance": 5470.600128173828,
            "duration": 1859.674,
            "id": "711863594",
            "source": "Nike+",
            "start_time": "2011-07-11T05:19:09-05:00",
            "type": "RUN"
        },
        {
            "distance": 9207.500457763672,
            "duration": 4158.534,
            "id": "711863592",
            "source": "Nike+",
            "start_time": "2011-07-08T18:43:56-05:00",
            "type": "RUN"
        },
        {
            "distance": 9788.100242614746,
            "duration": 3290.447,
            "id": "707443433",
            "source": "Nike+",
            "start_time": "2011-07-03T08:11:52-05:00",
            "type": "RUN"
        },
        {
            "distance": 5832.900047302246,
            "duration": 1805.55,
            "id": "706451945",
            "source": "Nike+",
            "start_time": "2011-06-30T05:23:45-05:00",
            "type": "RUN"
        },
        {
            "distance": 5623.199939727783,
            "duration": 1811.276,
            "id": "699638308",
            "source": "Nike+",
            "start_time": "2011-06-13T05:01:34-05:00",
            "type": "RUN"
        },
        {
            "distance": 8708.100318908691,
            "duration": 2703.119,
            "id": "698111103",
            "source": "Nike+",
            "start_time": "2011-06-08T05:15:02-05:00",
            "type": "RUN"
        },
        {
            "distance": 5509.099960327148,
            "duration": 1841.388,
            "id": "697029407",
            "source": "Nike+",
            "start_time": "2011-06-06T05:15:02-05:00",
            "type": "RUN"
        },
        {
            "distance": 10901.900291442871,
            "duration": 3630.925,
            "id": "693643403",
            "source": "Nike+",
            "start_time": "2011-05-25T20:51:20-05:00",
            "type": "RUN"
        },
        {
            "distance": 8324.299812316895,
            "duration": 2730.045,
            "id": "691342618",
            "source": "Nike+",
            "start_time": "2011-05-23T05:19:15-05:00",
            "type": "RUN"
        },
        {
            "distance": 6085.599899291992,
            "duration": 1844.886,
            "id": "672806531",
            "source": "Nike+",
            "start_time": "2011-05-18T05:14:24-05:00",
            "type": "RUN"
        },
        {
            "distance": 8643.400192260742,
            "duration": 2709.417,
            "id": "667670326",
            "source": "Nike+",
            "start_time": "2011-05-16T05:09:29-05:00",
            "type": "RUN"
        },
        {
            "distance": 5775.100231170654,
            "duration": 1808.798,
            "id": "666300590",
            "source": "Nike+",
            "start_time": "2011-05-11T05:13:58-05:00",
            "type": "RUN"
        },
        {
            "distance": 8314.900398254395,
            "duration": 2756.65,
            "id": "665448321",
            "source": "Nike+",
            "start_time": "2011-05-09T05:07:39-05:00",
            "type": "RUN"
        },
        {
            "distance": 7394.2999839782715,
            "duration": 2573.986,
            "id": "665349628",
            "source": "Nike+",
            "start_time": "2011-05-07T20:38:13-05:00",
            "type": "RUN"
        },
        {
            "distance": 5567.599773406982,
            "duration": 1807.388,
            "id": "662896390",
            "source": "Nike+",
            "start_time": "2011-05-04T05:31:19-05:00",
            "type": "RUN"
        },
        {
            "distance": 8627.900123596191,
            "duration": 2872.914,
            "id": "663444878",
            "source": "Nike+",
            "start_time": "2011-05-02T05:46:20-05:00",
            "type": "RUN"
        },
        {
            "distance": 8432.999610900879,
            "duration": 2839.412,
            "id": "660633539",
            "source": "Nike+",
            "start_time": "2011-04-25T20:58:21-05:00",
            "type": "RUN"
        },
        {
            "distance": 7998.4002113342285,
            "duration": 2712.044,
            "id": "660633538",
            "source": "Nike+",
            "start_time": "2011-04-20T05:03:29-05:00",
            "type": "RUN"
        },
        {
            "distance": 1047.9999780654907,
            "duration": 666.999,
            "id": "658830270",
            "source": "Nike+",
            "start_time": "2011-04-19T21:29:32-05:00",
            "type": "RUN"
        },
        {
            "distance": 5467.899799346924,
            "duration": 1776.689,
            "id": "655942491",
            "source": "Nike+",
            "start_time": "2011-03-28T05:15:34-05:00",
            "type": "RUN"
        },
        {
            "distance": 5512.1002197265625,
            "duration": 1835.145,
            "id": "649137791",
            "source": "Nike+",
            "start_time": "2011-03-22T05:06:16-05:00",
            "type": "RUN"
        },
        {
            "distance": 5460.8001708984375,
            "duration": 1809.565,
            "id": "642117159",
            "source": "Nike+",
            "start_time": "2011-03-08T05:07:04-06:00",
            "type": "RUN"
        },
        {
            "distance": 7207.900047302246,
            "duration": 2406.262,
            "id": "625123449",
            "source": "Nike+",
            "start_time": "2011-02-08T05:00:02-06:00",
            "type": "RUN"
        },
        {
            "distance": 5512.00008392334,
            "duration": 1876.773,
            "id": "614645243",
            "source": "Nike+",
            "start_time": "2011-01-31T05:02:08-06:00",
            "type": "RUN"
        },
        {
            "distance": 5313.700199127197,
            "duration": 1811.987,
            "id": "599916848",
            "source": "Nike+",
            "start_time": "2011-01-10T05:06:51-06:00",
            "type": "RUN"
        },
        {
            "distance": 5424.600124359131,
            "duration": 1804.663,
            "id": "594809752",
            "source": "Nike+",
            "start_time": "2011-01-05T05:03:35-06:00",
            "type": "RUN"
        },
        {
            "distance": 7084.000110626221,
            "duration": 2488.175,
            "id": "592520198",
            "source": "Nike+",
            "start_time": "2011-01-03T04:55:52-06:00",
            "type": "RUN"
        },
        {
            "distance": 5346.700191497803,
            "duration": 1855.246,
            "id": "587940113",
            "source": "Nike+",
            "start_time": "2010-12-29T05:03:18-06:00",
            "type": "RUN"
        },
        {
            "distance": 3972.5000858306885,
            "duration": 1382.172,
            "id": "587902037",
            "source": "Nike+",
            "start_time": "2010-12-27T05:09:22-06:00",
            "type": "RUN"
        },
        {
            "distance": 3552.4001121520996,
            "duration": 1236.799,
            "id": "567381179",
            "source": "Nike+",
            "start_time": "2010-11-30T05:17:06-06:00",
            "type": "RUN"
        },
        {
            "distance": 5259.300231933594,
            "duration": 1820.548,
            "id": "536326851",
            "source": "Nike+",
            "start_time": "2010-09-15T05:22:00-05:00",
            "type": "RUN"
        },
        {
            "distance": 3710.200071334839,
            "duration": 1288.062,
            "id": "536326846",
            "source": "Nike+",
            "start_time": "2010-09-13T05:27:27-05:00",
            "type": "RUN"
        },
        {
            "distance": 5236.400127410889,
            "duration": 1819.605,
            "id": "520316457",
            "source": "Nike+",
            "start_time": "2010-08-04T05:09:42-05:00",
            "type": "RUN"
        },
        {
            "distance": 7992.300033569336,
            "duration": 2707.984,
            "id": "519832876",
            "source": "Nike+",
            "start_time": "2010-08-01T06:28:22-05:00",
            "type": "RUN"
        },
        {
            "distance": 5495.60022354126,
            "duration": 1887.805,
            "id": "518744629",
            "source": "Nike+",
            "start_time": "2010-07-28T05:09:54-05:00",
            "type": "RUN"
        },
        {
            "distance": 5291.200160980225,
            "duration": 1808.842,
            "id": "518210359",
            "source": "Nike+",
            "start_time": "2010-07-26T04:59:30-05:00",
            "type": "RUN"
        },
        {
            "distance": 5318.50004196167,
            "duration": 1807.123,
            "id": "516912277",
            "source": "Nike+",
            "start_time": "2010-07-21T05:03:08-05:00",
            "type": "RUN"
        },
        {
            "distance": 5340.799808502197,
            "duration": 1810.4,
            "id": "516707044",
            "source": "Nike+",
            "start_time": "2010-07-20T04:59:05-05:00",
            "type": "RUN"
        },
        {
            "distance": 5587.200164794922,
            "duration": 1949.981,
            "id": "513646669",
            "source": "Nike+",
            "start_time": "2010-07-12T05:23:30-05:00",
            "type": "RUN"
        },
        {
            "distance": 5602.700233459473,
            "duration": 1812.613,
            "id": "485530487",
            "source": "Nike+",
            "start_time": "2010-05-20T21:31:45-05:00",
            "type": "RUN"
        },
        {
            "distance": 5517.300128936768,
            "duration": 1840.581,
            "id": "478408960",
            "source": "Nike+",
            "start_time": "2010-05-10T05:07:53-05:00",
            "type": "RUN"
        },
        {
            "distance": 5362.400054931641,
            "duration": 1675.855,
            "id": "476402396",
            "source": "Nike+",
            "start_time": "2010-05-06T05:11:19-05:00",
            "type": "RUN"
        },
        {
            "distance": 5433.800220489502,
            "duration": 1670.667,
            "id": "470588496",
            "source": "Nike+",
            "start_time": "2010-04-29T05:12:10-05:00",
            "type": "RUN"
        },
        {
            "distance": 5625.199794769287,
            "duration": 1868.127,
            "id": "470431499",
            "source": "Nike+",
            "start_time": "2010-04-26T05:14:39-05:00",
            "type": "RUN"
        },
        {
            "distance": 5754.600048065186,
            "duration": 1998.834,
            "id": "468206859",
            "source": "Nike+",
            "start_time": "2010-04-21T05:12:53-05:00",
            "type": "RUN"
        },
        {
            "distance": 19383.100509643555,
            "duration": 6382.943,
            "id": "431400961",
            "source": "Nike+",
            "start_time": "2010-02-02T20:41:13-06:00",
            "type": "RUN"
        },
        {
            "distance": 17749.70054626465,
            "duration": 5969.306,
            "id": "427117085",
            "source": "Nike+",
            "start_time": "2010-01-24T20:57:39-06:00",
            "type": "RUN"
        },
        {
            "distance": 14745.499610900879,
            "duration": 4909.239,
            "id": "423269377",
            "source": "Nike+",
            "start_time": "2010-01-18T21:13:21-06:00",
            "type": "RUN"
        },
        {
            "distance": 8166.099548339844,
            "duration": 2544.15,
            "id": "422013377",
            "source": "Nike+",
            "start_time": "2010-01-14T05:04:06-06:00",
            "type": "RUN"
        },
        {
            "distance": 9680.6001663208,
            "duration": 3118.276,
            "id": "421702540",
            "source": "Nike+",
            "start_time": "2010-01-12T05:12:04-06:00",
            "type": "RUN"
        },
        {
            "distance": 13062.100410461426,
            "duration": 4373.225,
            "id": "420315166",
            "source": "Nike+",
            "start_time": "2010-01-09T14:19:43-06:00",
            "type": "RUN"
        },
        {
            "distance": 8058.600425720215,
            "duration": 2603.048,
            "id": "419103220",
            "source": "Nike+",
            "start_time": "2010-01-06T05:08:48-06:00",
            "type": "RUN"
        },
        {
            "distance": 9686.400413513184,
            "duration": 3122.508,
            "id": "414653362",
            "source": "Nike+",
            "start_time": "2010-01-04T05:07:16-06:00",
            "type": "RUN"
        },
        {
            "distance": 8452.799797058105,
            "duration": 2825.262,
            "id": "415000454",
            "source": "Nike+",
            "start_time": "2010-01-02T07:59:53-06:00",
            "type": "RUN"
        },
        {
            "distance": 11182.999610900879,
            "duration": 3733.88,
            "id": "413606993",
            "source": "Nike+",
            "start_time": "2009-12-28T06:07:20-06:00",
            "type": "RUN"
        },
        {
            "distance": 8628.100395202637,
            "duration": 2801.954,
            "id": "411655479",
            "source": "Nike+",
            "start_time": "2009-12-23T06:49:58-06:00",
            "type": "RUN"
        },
        {
            "distance": 10971.699714660645,
            "duration": 3717.343,
            "id": "411440537",
            "source": "Nike+",
            "start_time": "2009-12-21T05:03:25-06:00",
            "type": "RUN"
        },
        {
            "distance": 6579.19979095459,
            "duration": 2136.036,
            "id": "410491805",
            "source": "Nike+",
            "start_time": "2009-12-15T05:13:05-06:00",
            "type": "RUN"
        },
        {
            "distance": 8676.09977722168,
            "duration": 2814.912,
            "id": "410918627",
            "source": "Nike+",
            "start_time": "2009-12-12T06:39:41-06:00",
            "type": "RUN"
        },
        {
            "distance": 8225.600242614746,
            "duration": 2752.467,
            "id": "410037999",
            "source": "Nike+",
            "start_time": "2009-12-09T05:00:26-06:00",
            "type": "RUN"
        },
        {
            "distance": 5752.200126647949,
            "duration": 1986.661,
            "id": "410523321",
            "source": "Nike+",
            "start_time": "2009-12-07T05:10:24-06:00",
            "type": "RUN"
        },
        {
            "distance": 6723.400115966797,
            "duration": 2201.011,
            "id": "409102422",
            "source": "Nike+",
            "start_time": "2009-12-03T05:13:57-06:00",
            "type": "RUN"
        },
        {
            "distance": 6664.5002365112305,
            "duration": 2272.48,
            "id": "408402438",
            "source": "Nike+",
            "start_time": "2009-12-01T05:04:18-06:00",
            "type": "RUN"
        },
        {
            "distance": 6726.6998291015625,
            "duration": 2309.411,
            "id": "404642925",
            "source": "Nike+",
            "start_time": "2009-11-23T05:09:12-06:00",
            "type": "RUN"
        },
        {
            "distance": 5749.000072479248,
            "duration": 1965.786,
            "id": "403625268",
            "source": "Nike+",
            "start_time": "2009-11-17T05:06:43-06:00",
            "type": "RUN"
        },
        {
            "distance": 5673.900127410889,
            "duration": 1913.414,
            "id": "384632076",
            "source": "Nike+",
            "start_time": "2009-09-29T04:57:45-05:00",
            "type": "RUN"
        },
        {
            "distance": 2910.5000495910645,
            "duration": 1705.894,
            "id": "384023602",
            "source": "Nike+",
            "start_time": "2009-09-28T05:06:26-05:00",
            "type": "RUN"
        },
        {
            "distance": 3257.1001052856445,
            "duration": 1946.127,
            "id": "381270174",
            "source": "Nike+",
            "start_time": "2009-09-22T04:58:45-05:00",
            "type": "RUN"
        },
        {
            "distance": 3305.2000999450684,
            "duration": 1892.737,
            "id": "381557904",
            "source": "Nike+",
            "start_time": "2009-09-21T05:00:39-05:00",
            "type": "RUN"
        },
        {
            "distance": 5688.700199127197,
            "duration": 1926.769,
            "id": "381125100",
            "source": "Nike+",
            "start_time": "2009-09-17T04:59:14-05:00",
            "type": "RUN"
        },
        {
            "distance": 4740.300178527832,
            "duration": 1642.861,
            "id": "381814460",
            "source": "Nike+",
            "start_time": "2009-09-16T05:02:40-05:00",
            "type": "RUN"
        },
        {
            "distance": 4789.899826049805,
            "duration": 1674.566,
            "id": "381106845",
            "source": "Nike+",
            "start_time": "2009-09-15T05:01:42-05:00",
            "type": "RUN"
        },
        {
            "distance": 5737.400054931641,
            "duration": 2018.713,
            "id": "380302471",
            "source": "Nike+",
            "start_time": "2009-09-14T05:04:02-05:00",
            "type": "RUN"
        },
        {
            "distance": 6894.700050354004,
            "duration": 2442.882,
            "id": "373012220",
            "source": "Nike+",
            "start_time": "2009-07-27T20:53:06-05:00",
            "type": "RUN"
        },
        {
            "distance": 6986.100196838379,
            "duration": 2531.863,
            "id": "367246727",
            "source": "Nike+",
            "start_time": "2009-07-13T20:46:17-05:00",
            "type": "RUN"
        },
        {
            "distance": 6736.899852752686,
            "duration": 2408.896,
            "id": "350952660",
            "source": "Nike+",
            "start_time": "2009-06-15T20:55:50-05:00",
            "type": "RUN"
        },
        {
            "distance": 5637.1002197265625,
            "duration": 1996.067,
            "id": "350731355",
            "source": "Nike+",
            "start_time": "2009-06-10T20:47:31-05:00",
            "type": "RUN"
        },
        {
            "distance": 15.599999576807022,
            "duration": 13.073,
            "id": "350731354",
            "source": "Nike+",
            "start_time": "2009-06-10T20:46:45-05:00",
            "type": "RUN"
        },
        {
            "distance": 6790.10009765625,
            "duration": 2438.436,
            "id": "346517257",
            "source": "Nike+",
            "start_time": "2009-05-27T20:50:52-05:00",
            "type": "RUN"
        },
        {
            "distance": 6839.200019836426,
            "duration": 2444.835,
            "id": "342760049",
            "source": "Nike+",
            "start_time": "2009-04-22T20:45:25-05:00",
            "type": "RUN"
        },
        {
            "distance": 5983.699798583984,
            "duration": 2048.873,
            "id": "342751389",
            "source": "Nike+",
            "start_time": "2009-04-20T20:41:20-05:00",
            "type": "RUN"
        },
        {
            "distance": 8272.000312805176,
            "duration": 2603.935,
            "id": "319412523",
            "source": "Nike+",
            "start_time": "2009-02-09T05:02:52-06:00",
            "type": "RUN"
        },
        {
            "distance": 5698.200225830078,
            "duration": 1765.534,
            "id": "315524273",
            "source": "Nike+",
            "start_time": "2009-01-21T05:17:40-06:00",
            "type": "RUN"
        },
        {
            "distance": 7171.800136566162,
            "duration": 2245.379,
            "id": "314907225",
            "source": "Nike+",
            "start_time": "2009-01-15T05:07:15-06:00",
            "type": "RUN"
        },
        {
            "distance": 7179.500102996826,
            "duration": 2278.253,
            "id": "315201871",
            "source": "Nike+",
            "start_time": "2009-01-13T05:10:18-06:00",
            "type": "RUN"
        },
        {
            "distance": 10654.000282287598,
            "duration": 3473.862,
            "id": "313458234",
            "source": "Nike+",
            "start_time": "2009-01-12T04:58:51-06:00",
            "type": "RUN"
        },
        {
            "distance": 7152.500152587891,
            "duration": 2236.449,
            "id": "312748868",
            "source": "Nike+",
            "start_time": "2009-01-08T20:51:15-06:00",
            "type": "RUN"
        },
        {
            "distance": 8229.700088500977,
            "duration": 2675.372,
            "id": "313343970",
            "source": "Nike+",
            "start_time": "2009-01-07T05:19:21-06:00",
            "type": "RUN"
        },
        {
            "distance": 6982.100009918213,
            "duration": 2324.828,
            "id": "312929386",
            "source": "Nike+",
            "start_time": "2009-01-02T04:56:13-06:00",
            "type": "RUN"
        },
        {
            "distance": 6994.900226593018,
            "duration": 2282.109,
            "id": "313124898",
            "source": "Nike+",
            "start_time": "2008-12-31T05:16:10-06:00",
            "type": "RUN"
        },
        {
            "distance": 7112.100124359131,
            "duration": 2397.599,
            "id": "312319383",
            "source": "Nike+",
            "start_time": "2008-12-29T05:11:45-06:00",
            "type": "RUN"
        }
    ];

  }
});
