import React from 'react';
import { Break } from '../../../Break/Break';
import { EColor, Text } from '../../../Text/Text';
import styles from './userblock.css';
import { IconAnon } from '../../../Icons/IconAnon';

interface IUserBlockProps {
   avatarSrc?: string;
   username?: string;
   loading: boolean;
}

export function UserBlock({ avatarSrc, username, loading }: IUserBlockProps) {
   return (
      <a href={`https://www.reddit.com/api/v1/authorize?client_id=${process.env.CLIENT_ID}&response_type=code&state=RANDOM_STRING&redirect_uri=http://localhost:3000/auth&duration=temporary&scope=identity read submit`}>
         <div className={styles.userBox}>
            <div className={styles.avatarBox}>
               {avatarSrc
                  ? <img src={avatarSrc} alt="user avatar" className={styles.avatarImage} />
                  : <IconAnon />
               }
            </div>
            <div className={styles.username}>
               <Break size={10} />
               { loading ? (<Text size={20} color={EColor.grey99}>Loading...</Text>)
                  : (<Text size={20} color={username ? EColor.black : EColor.grey99}>{username || 'Аноним'}</Text>)
               }
            </div>
         </div>
      </a>
   );
}