import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Progress } from '@/components/ui/progress';

const RegistrationForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    recordingType: 'audio',
    notifyOnRecord: false,
    acceptTerms: false
  });

  const updateForm = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const nextStep = () => setStep(prev => Math.min(prev + 1, 3));
  const prevStep = () => setStep(prev => Math.max(prev - 1, 1));

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-sm">
      <div className="flex items-center justify-center mb-6">
        <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
          <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
          </svg>
        </div>
        <h1 className="text-2xl font-bold ml-3 text-blue-600">Story Pod</h1>
      </div>

      <h2 className="text-2xl font-bold text-center mb-2">Create your Story Pod account</h2>
      <p className="text-gray-600 text-center mb-6">
        Join our community and start preserving your precious memories
      </p>

      <Progress value={step * 33.33} className="mb-6" />
      <p className="text-sm text-gray-500 mb-6">Step {step} of 3</p>

      {/* Form steps implementation */}
    </div>
  );
};

export default RegistrationForm;