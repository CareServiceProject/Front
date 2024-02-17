import React, { useEffect, useState } from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import ServiceCard from '../../../components/ServiceCard';
import { fetchWaitingCareList } from '../../../api/mateHome';

// 대기중인 도움 목록의 데이터 형식을 정의한 인터페이스
interface WaitingListData {
  id: string;
  role: string;
  status: number;
  // 필요한 다른 속성들을 여기에 추가
}

const WaitingList: React.FC = () => {
  // 대기중인 도움 목록 상태를 선언하고 인터페이스로 타입을 지정
  const [waitingList, setWaitingList] = useState<WaitingListData[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const waitingListData = await fetchWaitingCareList();
      setWaitingList(waitingListData);
    } catch (error) {
      console.error('Failed to fetch waiting list:', error);
    }
  };

  // 수락 핸들러
  const handleAccept = (itemId: string) => {
    // 여기서 수락 로직을 구현합니다.
    console.log('Item accepted:', itemId);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>대기중인 도움 목록</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {waitingList.map((item, index) => (
          <ServiceCard
            key={index}
            data={item}
            role={item.role}
            status={item.status}
            onAccept={() => handleAccept(item.id)}
          />
        ))}
      </IonContent>
    </IonPage>
  );
};

export default WaitingList;
