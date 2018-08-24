export interface OperatorInfo {
  name: string;
  category:
    | 'combination'
    | 'filtering'
    | 'creation'
    | 'error handling'
    | 'multicasting'
    | 'transformation'
    | 'utility';
  views: number;
}

export const OPERATOR_INFO: OperatorInfo[] = [
  { name: 'combineAll', category: 'combination', views: 233245 },
  { name: 'combineLatest', category: 'combination', views: 422142 },
  { name: 'concat', category: 'combination', views: 965335 },
  { name: 'concatAll', category: 'combination', views: 222112 },
  { name: 'forkJoin', category: 'combination', views: 1232688 },
  { name: 'filter', category: 'filtering', views: 743368 },
  { name: 'take', category: 'filtering', views: 544323 },
  { name: 'skip', category: 'filtering', views: 233799 },
  { name: 'distinctUntilChanged', category: 'filtering', views: 134345 },
  { name: 'takeUntil', category: 'filtering', views: 433579 },
  { name: 'catch', category: 'error handling', views: 766433 },
  { name: 'retryWhen', category: 'error handling', views: 322567 },
  { name: 'interval', category: 'creation', views: 467785 },
  { name: 'of', category: 'creation', views: 774533 },
  { name: 'empty', category: 'creation', views: 646435 },
  { name: 'throw', category: 'creation', views: 233245 },
  { name: 'publish', category: 'multicasting', views: 76543 },
  { name: 'share', category: 'multicasting', views: 43321 },
  { name: 'concatMap', category: 'transformation', views: 32232 },
  { name: 'map', category: 'transformation', views: 2987657 },
  { name: 'mapTo', category: 'transformation', views: 1346754 },
  { name: 'mergeMap', category: 'transformation', views: 855434 },
  { name: 'scan', category: 'transformation', views: 223456 },
  { name: 'switchMap', category: 'transformation', views: 553359 },
  { name: 'pluck', category: 'transformation', views: 985642 },
  { name: 'buffer', category: 'transformation', views: 985324 },
  { name: 'do', category: 'utility', views: 422357 },
  { name: 'delay', category: 'utility', views: 653280 },
  { name: 'let', category: 'utility', views: 874324 },
  { name: 'timeout', category: 'utility', views: 643256 }
];
