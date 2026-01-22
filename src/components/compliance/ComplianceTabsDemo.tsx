import React, { useState } from 'react';
import { TableType } from '@/types/complianceTypes';
import TableSelectorTabs from './TableSelectorTabs';

const ComplianceTabsDemo: React.FC = () => {
  const [activeTable, setActiveTable] = useState<TableType>('appendix2');
  const [doctorCount, setDoctorCount] = useState<string>('50-99');
  const [nurseCount, setNurseCount] = useState<string>('100-299');

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold text-center mb-8">雙表格合規計算器 - 標籤頁測試</h2>
      
      <TableSelectorTabs
        activeTable={activeTable}
        onTableChange={setActiveTable}
        doctorCount={doctorCount}
        nurseCount={nurseCount}
      />

      {/* 測試控制面板 */}
      <div className="mt-8 p-6 bg-gray-50 rounded-xl">
        <h3 className="text-lg font-semibold mb-4">測試控制</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              醫師服務頻率人數範圍
            </label>
            <select 
              value={doctorCount} 
              onChange={(e) => setDoctorCount(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg"
            >
              <option value="">未選擇</option>
              <option value="50-99">50-99人</option>
              <option value="100+">100人以上</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              護理人員配置人數範圍
            </label>
            <select 
              value={nurseCount} 
              onChange={(e) => setNurseCount(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg"
            >
              <option value="">未選擇</option>
              <option value="0-99">0-99人</option>
              <option value="100-299">100-299人</option>
              <option value="300+">300人以上</option>
            </select>
          </div>
        </div>
        
        <div className="mt-4 p-4 bg-white rounded-lg">
          <h4 className="font-medium mb-2">當前狀態：</h4>
          <p><strong>活躍表格：</strong> {activeTable === 'appendix2' ? '附表二（醫師服務頻率）' : '附表三（護理人員配置）'}</p>
          <p><strong>醫師人數範圍：</strong> {doctorCount || '未設定'}</p>
          <p><strong>護理人數範圍：</strong> {nurseCount || '未設定'}</p>
        </div>
      </div>
    </div>
  );
};

export default ComplianceTabsDemo;