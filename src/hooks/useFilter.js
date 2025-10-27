import {useState,useMemo} from 'react';

export function useFilter(initialList){
    const [searchTerm,setSearchTerm]=useState('');

    const handleSearchChange = (event)=>{
        setSearchTerm(event.target.value);
    }
    const filteredList=useMemo(()=>{
        if (!searchTerm){
            return initialList
        }
        return initialList.filter(item =>
            item.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
    },[initialList,searchTerm])
    return{searchTerm,handleSearchChange,filteredList}
}