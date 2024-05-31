// ServiceSelection.jsx
import React, { useState } from 'react';
import { services, tasks } from '../../helpers/ServiceDetails';




const ServiceItem = ({ service, isSelected, onSelect, onDeselect, showDetails, onToggleDetails }) => (
    <div className="my-2">
        <div className="flex justify-between">
            <label className="mr-0">{service.name}</label>

            <input
                type="checkbox"
                checked={isSelected}
                onChange={() => (isSelected ? onDeselect(service.name) : onSelect(service.name))}
            />

        </div>
        {isSelected && (
            <div className="mt-2">
                {showDetails ? (
                    <>
                        <button className="text-blue-500" onClick={() => onToggleDetails(service.name)}>Hide details</button>
                        <div>{service.detail}</div>
                    </>
                ) : null}
            </div>
        )}
    </div>
);

const ErrorMessage = ({ message }) => (
    <div className="text-red-500 mt-2">{message}</div>
);

const ServiceSelection = () => {
    const [selectedService, setSelectedService] = useState('');
    const [selectedTasks, setSelectedTasks] = useState([]);
    const [error, setError] = useState('');
    const [detailsVisible, setDetailsVisible] = useState({});

    const handleServiceDeselect = (service) => {
        if (selectedService === service) {
            setSelectedService('');
            setDetailsVisible(prev => ({ ...prev, [service]: false }));  // Hide details when deselecting service
        } else {
            setSelectedTasks(prevTasks => prevTasks.filter(task => task !== service));
            setDetailsVisible(prev => ({ ...prev, [service]: false }));  // Hide details when deselecting task
        }
    };

    const handleServiceSelect = (service) => {
        if (services.map(s => s.name).includes(service)) {
            if (selectedService && selectedService !== service) {
                setError('You can select one type of cleaning and extra tasks');
            } else {
                setSelectedService(service);
                setDetailsVisible(prev => ({ ...prev, [service]: true }));  // Show details when selecting service
                setError('');
            }
        } else {
            setSelectedTasks(prevTasks =>
                prevTasks.includes(service) ? prevTasks.filter(task => task !== service) : [...prevTasks, service]
            );
            setDetailsVisible(prev => ({ ...prev, [service]: true }));  // Show details when selecting task
        }
    };

    const handleToggleDetails = (service) => {
        setDetailsVisible(prev => ({ ...prev, [service]: !prev[service] }));
    };


    return (
        <div className="p-4">
            <h1 className="text-xl font-bold mb-4">What service would you like to book?</h1>
            <p className={`mb-4 ${error ? 'text-red-500' : ''}`}>You can select one type of cleaning and extra tasks</p>
            {services.map(service => (
                <ServiceItem
                    key={service.name}
                    service={service}
                    isSelected={selectedService === service.name || selectedTasks.includes(service.name)}
                    onSelect={handleServiceSelect}
                    onDeselect={handleServiceDeselect}
                    showDetails={detailsVisible[service.name]}
                    onToggleDetails={handleToggleDetails}
                />
            ))}
            {tasks.map(task => (
                <ServiceItem
                    key={task.name}
                    service={task}
                    isSelected={selectedTasks.includes(task.name)}
                    onSelect={handleServiceSelect}
                    onDeselect={handleServiceDeselect}
                    showDetails={detailsVisible[task.name]}
                    onToggleDetails={handleToggleDetails}
                />
            ))}
            {error && <ErrorMessage message={error} />}
            <button className="mt-4 bg-orange-500 text-white px-4 py-2 rounded">Next</button>
        </div>
    );
};

export default ServiceSelection;
